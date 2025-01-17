/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Vendor Direct Fulfillment Sandbox Test Data
 * The Selling Partner API for Vendor Direct Fulfillment Sandbox Test Data provides programmatic access to vendor direct fulfillment sandbox test data.
 *
 * The version of the OpenAPI document: 2021-10-28
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { TestCaseData } from './test-case-data';

/**
 * The transaction details including the status. If the transaction was successful, also includes the requested test order data.
 * @export
 * @interface Transaction
 */
export interface Transaction {
    /**
     * The unique identifier returned in the response to the generateOrderScenarios request.
     * @type {string}
     * @memberof Transaction
     */
    transactionId: string;
    /**
     * The current processing status of the transaction.
     * @type {string}
     * @memberof Transaction
     */
    status: TransactionStatusEnum;
    /**
     * 
     * @type {TestCaseData}
     * @memberof Transaction
     */
    testCaseData?: TestCaseData;
}

/**
    * @export
    * @enum {string}
    */
export enum TransactionStatusEnum {
    Failure = 'FAILURE',
    Processing = 'PROCESSING',
    Success = 'SUCCESS'
}



