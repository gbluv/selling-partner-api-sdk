import {Configuration, ProductPricingApi} from './api-model'

import {endpoints, createAxiosInstance, ClientConfiguration} from '@sp-api-sdk/common'

import {ProductPricingApiError} from './error'

export class ProductPricingApiClient extends ProductPricingApi {
	constructor(parameters: ClientConfiguration) {
		const axiosInstance = createAxiosInstance(parameters)
		const configuration = new Configuration()

		const endpoint: string | undefined = endpoints.sandbox[parameters.region]

		if (!endpoint) {
			throw new ProductPricingApiError(`Unknown region : ${parameters.region}`)
		}

		super(configuration, endpoint, axiosInstance)
	}
}

