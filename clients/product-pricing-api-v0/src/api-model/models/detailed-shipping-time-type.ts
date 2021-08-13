/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The time range in which an item will likely be shipped once an order has been placed.
 * @export
 * @interface DetailedShippingTimeType
 */
export interface DetailedShippingTimeType {
    /**
     * The minimum time, in hours, that the item will likely be shipped after the order has been placed.
     * @type {number}
     * @memberof DetailedShippingTimeType
     */
    minimumHours?: number;
    /**
     * The maximum time, in hours, that the item will likely be shipped after the order has been placed.
     * @type {number}
     * @memberof DetailedShippingTimeType
     */
    maximumHours?: number;
    /**
     * The date when the item will be available for shipping. Only displayed for items that are not currently available for shipping.
     * @type {number}
     * @memberof DetailedShippingTimeType
     */
    availableDate?: number;
    /**
     * Indicates whether the item is available for shipping now, or on a known or an unknown date in the future. If known, the availableDate property indicates the date that the item will be available for shipping. Possible values: NOW, FUTURE_WITHOUT_DATE, FUTURE_WITH_DATE.
     * @type {string}
     * @memberof DetailedShippingTimeType
     */
    availabilityType?: DetailedShippingTimeTypeAvailabilityTypeEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum DetailedShippingTimeTypeAvailabilityTypeEnum {
    Now = 'NOW',
    FutureWithoutDate = 'FUTURE_WITHOUT_DATE',
    FutureWithDate = 'FUTURE_WITH_DATE'
}


