/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Retail Procurement Payments
 * The Selling Partner API for Retail Procurement Payments provides programmatic access to vendors payments data.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { TransactionId } from './transaction-id';

/**
 * The response schema for the submitInvoices operation.
 * @export
 * @interface SubmitInvoicesResponse
 */
export interface SubmitInvoicesResponse {
    /**
     * 
     * @type {TransactionId}
     * @memberof SubmitInvoicesResponse
     */
    payload?: TransactionId;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof SubmitInvoicesResponse
     */
    errors?: Array<Error>;
}

