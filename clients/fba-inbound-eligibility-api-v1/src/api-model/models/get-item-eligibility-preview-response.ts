/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for FBA Inbound Eligibilty
 * With the FBA Inbound Eligibility API, you can build applications that let sellers get eligibility previews for items before shipping them to Amazon\'s fulfillment centers. With this API you can find out if an item is eligible for inbound shipment to Amazon\'s fulfillment centers in a specific marketplace. You can also find out if an item is eligible for using the manufacturer barcode for FBA inventory tracking. Sellers can use this information to inform their decisions about which items to ship Amazon\'s fulfillment centers.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ItemEligibilityPreview } from './item-eligibility-preview';

/**
 * The response schema for the getItemEligibilityPreview operation.
 * @export
 * @interface GetItemEligibilityPreviewResponse
 */
export interface GetItemEligibilityPreviewResponse {
    /**
     * 
     * @type {ItemEligibilityPreview}
     * @memberof GetItemEligibilityPreviewResponse
     */
    payload?: ItemEligibilityPreview;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof GetItemEligibilityPreviewResponse
     */
    errors?: Array<Error>;
}

