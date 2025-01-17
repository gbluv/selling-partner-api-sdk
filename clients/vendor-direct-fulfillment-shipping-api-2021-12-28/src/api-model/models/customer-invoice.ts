/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Direct Fulfillment Shipping
 * The Selling Partner API for Direct Fulfillment Shipping provides programmatic access to a direct fulfillment vendor\'s shipping data.
 *
 * The version of the OpenAPI document: 2021-12-28
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface CustomerInvoice
 */
export interface CustomerInvoice {
    /**
     * The purchase order number for this order.
     * @type {string}
     * @memberof CustomerInvoice
     */
    purchaseOrderNumber: string;
    /**
     * The Base64encoded customer invoice.
     * @type {string}
     * @memberof CustomerInvoice
     */
    content: string;
}


