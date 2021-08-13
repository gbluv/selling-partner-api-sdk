/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Notifications
 * The Selling Partner API for Notifications lets you subscribe to notifications that are relevant to a selling partner\'s business. Using this API you can create a destination to receive notifications, subscribe to notifications, delete notification subscriptions, and more.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Destination } from './destination';

/**
 * The response schema for the getDestination operation.
 * @export
 * @interface GetDestinationResponse
 */
export interface GetDestinationResponse {
    /**
     * 
     * @type {Destination}
     * @memberof GetDestinationResponse
     */
    payload?: Destination;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof GetDestinationResponse
     */
    errors?: Array<Error>;
}

