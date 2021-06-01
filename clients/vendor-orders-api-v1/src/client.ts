import {Configuration, VendorOrdersApi} from './api-model'

import {endpoints, createAxiosInstance, ClientConfiguration} from '@sp-api-sdk/common'

import {VendorOrdersApiError} from './error'

export class VendorOrdersApiClient extends VendorOrdersApi {
	constructor(parameters: ClientConfiguration) {
		const axiosInstance = createAxiosInstance(parameters)
		const configuration = new Configuration()

		const endpoint: string | undefined = endpoints.sandbox[parameters.region]

		if (!endpoint) {
			throw new VendorOrdersApiError(`Unknown region : ${parameters.region}`)
		}

		super(configuration, endpoint, axiosInstance)
	}
}

