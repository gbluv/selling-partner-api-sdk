#!/usr/bin/env node

import fs from 'fs/promises'
import os from 'os'
import process from 'process'
import {parse as parsePath} from 'path'
import {promisify} from 'util'
import * as childProcess from 'child_process'

import Bluebird from 'bluebird'
import rimraf from 'rimraf'
import jsonfile from 'jsonfile'
import camelCase from 'camelcase'
import reduce from 'lodash/reduce'
import remark from 'remark'
import remarkStrip from 'strip-markdown'
import globby from 'globby'
import type {PackageJson} from 'type-fest'
import type {OpenAPIV3} from 'openapi-types'

import {renderTemplate, logger, applyPatches} from './utils'

const exec = promisify(childProcess.exec)
const rimrafPromise = promisify(rimraf)

const GRANTLESS_APIS = [
  {name: 'notifications-api-v1', scope: 'NOTIFICATIONS'},
  {name: 'authorization-api-v1', scope: 'MIGRATION'},
]

interface RateLimit {
  method: string
  rate: number
  burst: number
  urlRegex: string
  last?: boolean
}

async function readPackageVersion(path: string) {
  try {
    const pkg = (await import(`../${path}/package.json`)) as PackageJson
    return pkg.version
  } catch {
    return null
  }
}

async function getAxiosVersion() {
  const pkg = (await import('../packages/common/package.json')) as PackageJson
  return pkg.dependencies!.axios
}

const cleaner = remark().use(remarkStrip)

async function cleanMarkdown(input: string, stripNewLines?: boolean) {
  const vfile = await cleaner.process(input)
  let result = vfile.toString()

  if (stripNewLines) {
    result = result.replace(/[\r\n]+/g, ' ')
  }

  return result.trim()
}

async function generateClientVersion(modelFilePath: string) {
  const {dir: modelDirectory, name: modelName} = parsePath(modelFilePath)

  const modelPath = `selling-partner-api-models/models/${modelFilePath}`
  const patchesPath = `codegen/patches/${modelDirectory}/${modelName}`

  let model = await fs.readFile(modelPath, 'utf8')

  // Replace `doc:` markdown URLs to link to the real documentation
  model = model.replace(
    /\[(?<label>[^\]]+)]\(doc:(?<url>[^)]+)\)/g,
    '[$1](https://developer-docs.amazon.com/sp-api/docs/$2)',
  )

  const doc = JSON.parse(model) as OpenAPIV3.Document

  await applyPatches(doc, patchesPath)
  await jsonfile.writeFile(modelPath, doc)

  const startedAt = Date.now()

  const clientNameBase = modelDirectory.replace(/-model$/, '')
  const packageName = `${clientNameBase}-${doc.info.version}`
  const clientDirectoryPath = `clients/${packageName}`

  const clientClassName = camelCase(`${clientNameBase}Client`, {
    pascalCase: true,
    locale: false,
  })

  const paths = Object.values(doc.paths)
  const httpMethods = Object.values(paths[0]!)
  const [tag = 'Default'] = (httpMethods[0] as OpenAPIV3.OperationObject).tags ?? []
  const grantlessInfo = GRANTLESS_APIS.find(({name}) => packageName === name)

  logger.info('generating…', {packageName})

  await rimrafPromise(`${clientDirectoryPath}/src/api-model`)
  await exec(
    `yarn openapi-generator-cli generate \
      --additional-properties=supportsES6=true,useSingleRequestParameter=true,withSeparateModelsAndApi=true,modelPackage=models,apiPackage=api \
      --skip-validate-spec \
      -g typescript-axios \
      -i ${modelPath} \
      -o ${clientDirectoryPath}/src/api-model`,
  )

  await fs.mkdir(`${clientDirectoryPath}/__test__`, {recursive: true})
  await fs.writeFile(
    `${clientDirectoryPath}/package.json`,
    await renderTemplate('codegen/templates/package.json.mustache', {
      packageName,
      description: await cleanMarkdown(doc.info.description ?? '', true),
      version: (await readPackageVersion(clientDirectoryPath)) ?? '1.0.0',
      apiName: clientNameBase.replace(/-/g, ' '),
      dependencies: {
        auth: await readPackageVersion('packages/auth'),
        common: await readPackageVersion('packages/common'),
        axios: await getAxiosVersion(),
      },
    }),
  )

  const rateLimits = reduce(
    doc.paths,
    (acc: RateLimit[], value, key) => {
      if (!value) {
        return acc
      }

      for (const method of Object.keys(value) as OpenAPIV3.HttpMethods[]) {
        const {description} = value[method] as OpenAPIV3.PathItemObject

        if (description) {
          const result =
            /Rate \(requests per second\) \| Burst \|\n(?:\| -{4} )+\|\n(?:\|Default)?\| (?<rate>(?:\d*\.)?\d+) \| (?<burst>(?:\d*\.)?\d+) \|/.exec(
              description,
            )

          if (result?.groups) {
            const value = {
              method,
              rate: Number.parseFloat(result.groups.rate),
              burst: Number.parseFloat(result.groups.burst),
              urlRegex: `new RegExp('^${key.replace(/{.+}/g, '[^/]*')}$')`,
            }

            if (Number.isNaN(value.rate) || Number.isNaN(value.burst)) {
              logger.warn(
                `Warning: invalid rate limits: ${result.groups.rate} / ${result.groups.burst}`,
                {packageName},
              )
            }

            acc.push(value)
          } else {
            logger.warn(`Warning: no rate limiting found for ${packageName}`, {packageName})
          }
        }
      }

      return acc
    },
    [],
  )

  if (rateLimits.length > 0) {
    rateLimits[rateLimits.length - 1].last = true
  }

  await fs.writeFile(
    `${clientDirectoryPath}/tsconfig.json`,
    await renderTemplate('codegen/templates/tsconfig.json.mustache'),
  )
  await fs.writeFile(
    `${clientDirectoryPath}/tsconfig.es.json`,
    await renderTemplate('codegen/templates/tsconfig.es.json.mustache'),
  )
  await fs.writeFile(
    `${clientDirectoryPath}/index.ts`,
    await renderTemplate('codegen/templates/index.ts.mustache'),
  )
  await fs.writeFile(
    `${clientDirectoryPath}/src/client.ts`,
    await renderTemplate('codegen/templates/src/client.ts.mustache', {
      clientClassName,
      className: camelCase(`${tag}Api`, {
        pascalCase: true,
        locale: false,
        preserveConsecutiveUppercase: true,
      }),
      rateLimits,
    }),
  )
  await fs.writeFile(
    `${clientDirectoryPath}/README.md`,
    await renderTemplate('codegen/templates/README.md.mustache', {
      packageName,
      className: clientClassName,
      description: doc.info.description,
      sdkClientDocUrl: `https://bizon.github.io/selling-partner-api-sdk/modules/_sp_api_sdk_${packageName.replace(
        /\W/g,
        '_',
      )}.html`,
      grantlessScope: grantlessInfo?.scope,
    }),
  )
  await fs.writeFile(
    `${clientDirectoryPath}/__test__/client.spec.ts`,
    await renderTemplate('codegen/templates/__test__/client.spec.ts.mustache', {clientClassName}),
  )
  await fs.writeFile(
    `${clientDirectoryPath}/jest.config.js`,
    await renderTemplate('codegen/templates/jest.config.js.mustache'),
  )

  const generatedFiles = await fs.readdir(`${clientDirectoryPath}/src/api-model/`)
  const filesToNotDelete = new Set([
    'api.ts',
    'base.ts',
    'common.ts',
    'configuration.ts',
    'index.ts',
    'api',
    'models',
  ])

  await Promise.all(
    generatedFiles.map((file) => {
      if (filesToNotDelete.has(file)) {
        return null
      }

      return rimrafPromise(`${clientDirectoryPath}/src/api-model/${file}`)
    }),
  )

  logger.info(`done in ${(Date.now() - startedAt) / 1000}s`, {packageName})
}

;(async () => {
  await rimrafPromise('selling-partner-api-models')
  await exec('git clone https://github.com/amzn/selling-partner-api-models')

  const modelFilePaths = await globby('*/*.json', {
    onlyFiles: true,
    cwd: 'selling-partner-api-models/models',
  })

  await Bluebird.map(
    modelFilePaths,
    async (modelFilePath) => generateClientVersion(modelFilePath),
    {
      concurrency: os.cpus().length,
    },
  )

  await rimrafPromise('selling-partner-api-models')
})().catch((error) => {
  console.log(error)
  process.exit(1)
})
