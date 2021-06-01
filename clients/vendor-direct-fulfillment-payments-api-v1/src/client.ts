import {Configuration, VendorInvoiceApi} from './api-model'

import {endpoints, createAxiosInstance, ClientConfiguration} from '@sp-api-sdk/common'

import {VendorDirectFulfillmentPaymentsApiError} from './error'

export class VendorDirectFulfillmentPaymentsApiClient extends VendorInvoiceApi {
	constructor(parameters: ClientConfiguration) {
		const axiosInstance = createAxiosInstance(parameters)
		const configuration = new Configuration()

		const endpoint: string | undefined = endpoints.sandbox[parameters.region]

		if (!endpoint) {
			throw new VendorDirectFulfillmentPaymentsApiError(`Unknown region : ${parameters.region}`)
		}

		super(configuration, endpoint, axiosInstance)
	}
}

