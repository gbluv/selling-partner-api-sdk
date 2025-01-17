/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Shipping
 * Provides programmatic access to Amazon Shipping APIs.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Currency } from './currency';
import { Weight } from './weight';

/**
 * Item in the container.
 * @export
 * @interface ContainerItem
 */
export interface ContainerItem {
    /**
     * The quantity of the items of this type in the container.
     * @type {number}
     * @memberof ContainerItem
     */
    quantity: number;
    /**
     * 
     * @type {Currency}
     * @memberof ContainerItem
     */
    unitPrice: Currency;
    /**
     * 
     * @type {Weight}
     * @memberof ContainerItem
     */
    unitWeight: Weight;
    /**
     * A descriptive title of the item.
     * @type {string}
     * @memberof ContainerItem
     */
    title: string;
}


