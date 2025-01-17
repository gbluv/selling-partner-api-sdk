/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Orders
 * The Selling Partner API for Orders helps you programmatically retrieve order information. These APIs let you develop fast, flexible, custom applications in areas like order synchronization, order research, and demand-based decision support tools.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The updated values of the VerificationStatus field.
 * @export
 * @interface UpdateVerificationStatusRequestBody
 */
export interface UpdateVerificationStatusRequestBody {
    /**
     * The new verification status of the order.
     * @type {string}
     * @memberof UpdateVerificationStatusRequestBody
     */
    status: UpdateVerificationStatusRequestBodyStatusEnum;
    /**
     * The identifier for the order\'s regulated information reviewer.
     * @type {string}
     * @memberof UpdateVerificationStatusRequestBody
     */
    externalReviewerId: string;
    /**
     * The unique identifier for the rejection reason used for rejecting the order\'s regulated information. Only required if the new status is rejected.
     * @type {string}
     * @memberof UpdateVerificationStatusRequestBody
     */
    rejectionReasonId?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateVerificationStatusRequestBodyStatusEnum {
    Approved = 'Approved',
    Rejected = 'Rejected'
}



