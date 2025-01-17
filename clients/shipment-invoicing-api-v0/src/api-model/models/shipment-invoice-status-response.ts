/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Shipment Invoicing
 * The Selling Partner API for Shipment Invoicing helps you programmatically retrieve shipment invoice information in the Brazil marketplace for a selling partner’s Fulfillment by Amazon (FBA) orders.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ShipmentInvoiceStatusInfo } from './shipment-invoice-status-info';

/**
 * The shipment invoice status response.
 * @export
 * @interface ShipmentInvoiceStatusResponse
 */
export interface ShipmentInvoiceStatusResponse {
    /**
     * 
     * @type {ShipmentInvoiceStatusInfo}
     * @memberof ShipmentInvoiceStatusResponse
     */
    Shipments?: ShipmentInvoiceStatusInfo;
}


