/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner APIs for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon\'s fulfillment network. You can get information on both potential and existing fulfillment orders.
 *
 * The version of the OpenAPI document: 2020-07-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * An item that Amazon accepted for return.
 * @export
 * @interface CreateReturnItem
 */
export interface CreateReturnItem {
    /**
     * An identifier assigned by the seller to the return item.
     * @type {string}
     * @memberof CreateReturnItem
     */
    sellerReturnItemId: string;
    /**
     * The identifier assigned to the item by the seller when the fulfillment order was created.
     * @type {string}
     * @memberof CreateReturnItem
     */
    sellerFulfillmentOrderItemId: string;
    /**
     * The identifier for the shipment that is associated with the return item.
     * @type {string}
     * @memberof CreateReturnItem
     */
    amazonShipmentId: string;
    /**
     * The return reason code assigned to the return item by the seller.
     * @type {string}
     * @memberof CreateReturnItem
     */
    returnReasonCode: string;
    /**
     * An optional comment about the return item.
     * @type {string}
     * @memberof CreateReturnItem
     */
    returnComment?: string;
}

