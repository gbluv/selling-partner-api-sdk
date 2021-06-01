import {Configuration, ShippingApi} from './api-model'

import {endpoints, createAxiosInstance, ClientConfiguration} from '@sp-api-sdk/common'

import {ShippingApiError} from './error'

export class ShippingApiClient extends ShippingApi {
	constructor(parameters: ClientConfiguration) {
		const axiosInstance = createAxiosInstance(parameters)
		const configuration = new Configuration()

		const endpoint: string | undefined = endpoints.sandbox[parameters.region]

		if (!endpoint) {
			throw new ShippingApiError(`Unknown region : ${parameters.region}`)
		}

		super(configuration, endpoint, axiosInstance)
	}
}

