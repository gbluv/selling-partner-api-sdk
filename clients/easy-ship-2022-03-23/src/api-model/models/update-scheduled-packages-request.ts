/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Easy Ship
 * The Selling Partner API for Easy Ship helps you build applications that help sellers manage and ship Amazon Easy Ship orders.  Your Easy Ship applications can:  * Get available time slots for packages to be scheduled for delivery.  * Schedule, reschedule, and cancel Easy Ship orders.  * Print labels, invoices, and warranties.  See the [Marketplace Support Table](https://developer-docs.amazon.com/sp-api/docs/easy-ship-api-v2022-03-23-use-case-guide) for the differences in Easy Ship operations by marketplace.
 *
 * The version of the OpenAPI document: 2022-03-23
 * Contact: marketplaceapitest@amazon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { UpdatePackageDetails } from './update-package-details';

/**
 * The request schema for the `updateScheduledPackages` operation.
 * @export
 * @interface UpdateScheduledPackagesRequest
 */
export interface UpdateScheduledPackagesRequest {
    /**
     * A string of up to 255 characters.
     * @type {string}
     * @memberof UpdateScheduledPackagesRequest
     */
    marketplaceId: string;
    /**
     * A list of package update details.
     * @type {Array<UpdatePackageDetails>}
     * @memberof UpdateScheduledPackagesRequest
     */
    updatePackageDetailsList: Array<UpdatePackageDetails>;
}


