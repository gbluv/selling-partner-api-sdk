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


import { Address } from './address';
import { CODSettings } from './codsettings';
import { CreateFulfillmentOrderItem } from './create-fulfillment-order-item';
import { DeliveryWindow } from './delivery-window';
import { FeatureSettings } from './feature-settings';
import { FulfillmentAction } from './fulfillment-action';
import { FulfillmentPolicy } from './fulfillment-policy';
import { ShippingSpeedCategory } from './shipping-speed-category';

/**
 * The request body schema for the createFulfillmentOrder operation.
 * @export
 * @interface CreateFulfillmentOrderRequest
 */
export interface CreateFulfillmentOrderRequest {
    /**
     * The marketplace the fulfillment order is placed against.
     * @type {string}
     * @memberof CreateFulfillmentOrderRequest
     */
    marketplaceId?: string;
    /**
     * A fulfillment order identifier that the seller creates to track their fulfillment order. The SellerFulfillmentOrderId must be unique for each fulfillment order that a seller creates. If the seller\'s system already creates unique order identifiers, then these might be good values for them to use.
     * @type {string}
     * @memberof CreateFulfillmentOrderRequest
     */
    sellerFulfillmentOrderId: string;
    /**
     * A fulfillment order identifier that the seller creates. This value displays as the order identifier in recipient-facing materials such as the outbound shipment packing slip. The value of DisplayableOrderId should match the order identifier that the seller provides to the recipient. The seller can use the SellerFulfillmentOrderId for this value or they can specify an alternate value if they want the recipient to reference an alternate order identifier.  The value must be an alpha-numeric or ISO 8859-1 compliant string from one to 40 characters in length. Cannot contain two spaces in a row. Leading and trailing white space is removed.
     * @type {string}
     * @memberof CreateFulfillmentOrderRequest
     */
    displayableOrderId: string;
    /**
     * 
     * @type {string}
     * @memberof CreateFulfillmentOrderRequest
     */
    displayableOrderDate: string;
    /**
     * Order-specific text that appears in recipient-facing materials such as the outbound shipment packing slip.
     * @type {string}
     * @memberof CreateFulfillmentOrderRequest
     */
    displayableOrderComment: string;
    /**
     * 
     * @type {ShippingSpeedCategory}
     * @memberof CreateFulfillmentOrderRequest
     */
    shippingSpeedCategory: ShippingSpeedCategory;
    /**
     * 
     * @type {DeliveryWindow}
     * @memberof CreateFulfillmentOrderRequest
     */
    deliveryWindow?: DeliveryWindow;
    /**
     * 
     * @type {Address}
     * @memberof CreateFulfillmentOrderRequest
     */
    destinationAddress: Address;
    /**
     * 
     * @type {FulfillmentAction}
     * @memberof CreateFulfillmentOrderRequest
     */
    fulfillmentAction?: FulfillmentAction;
    /**
     * 
     * @type {FulfillmentPolicy}
     * @memberof CreateFulfillmentOrderRequest
     */
    fulfillmentPolicy?: FulfillmentPolicy;
    /**
     * 
     * @type {CODSettings}
     * @memberof CreateFulfillmentOrderRequest
     */
    codSettings?: CODSettings;
    /**
     * The two-character country code for the country from which the fulfillment order ships. Must be in ISO 3166-1 alpha-2 format.
     * @type {string}
     * @memberof CreateFulfillmentOrderRequest
     */
    shipFromCountryCode?: string;
    /**
     * A list of email addresses that the seller provides that are used by Amazon to send ship-complete notifications to recipients on behalf of the seller.
     * @type {Array<string>}
     * @memberof CreateFulfillmentOrderRequest
     */
    notificationEmails?: Array<string>;
    /**
     * A list of features and their fulfillment policies to apply to the order.
     * @type {Array<FeatureSettings>}
     * @memberof CreateFulfillmentOrderRequest
     */
    featureConstraints?: Array<FeatureSettings>;
    /**
     * An array of item information for creating a fulfillment order.
     * @type {Array<CreateFulfillmentOrderItem>}
     * @memberof CreateFulfillmentOrderRequest
     */
    items: Array<CreateFulfillmentOrderItem>;
}


