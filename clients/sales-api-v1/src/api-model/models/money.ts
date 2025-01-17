/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Sales
 * The Selling Partner API for Sales provides APIs related to sales performance.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The currency type and the amount.
 * @export
 * @interface Money
 */
export interface Money {
    /**
     * Three-digit currency code. In ISO 4217 format.
     * @type {string}
     * @memberof Money
     */
    currencyCode: string;
    /**
     * A decimal number with no loss of precision. Useful when precision loss is unnaceptable, as with currencies. Follows RFC7159 for number representation.
     * @type {string}
     * @memberof Money
     */
    amount: string;
}


