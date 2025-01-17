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


import { Money } from './money';

/**
 * Contains order metrics.
 * @export
 * @interface OrderMetricsInterval
 */
export interface OrderMetricsInterval {
    /**
     * The interval of time based on requested granularity (ex. Hour, Day, etc.) If this is the first or the last interval from the list, it might contain incomplete data if the requested interval doesn\'t align with the requested granularity (ex. request interval 2018-09-01T02:00:00Z--2018-09-04T19:00:00Z and granularity day will result in Sept 1st UTC day and Sept 4th UTC days having partial data).
     * @type {string}
     * @memberof OrderMetricsInterval
     */
    interval: string;
    /**
     * The number of units in orders based on the specified filters.
     * @type {number}
     * @memberof OrderMetricsInterval
     */
    unitCount: number;
    /**
     * The number of order items based on the specified filters.
     * @type {number}
     * @memberof OrderMetricsInterval
     */
    orderItemCount: number;
    /**
     * The number of orders based on the specified filters.
     * @type {number}
     * @memberof OrderMetricsInterval
     */
    orderCount: number;
    /**
     * 
     * @type {Money}
     * @memberof OrderMetricsInterval
     */
    averageUnitPrice: Money;
    /**
     * 
     * @type {Money}
     * @memberof OrderMetricsInterval
     */
    totalSales: Money;
}


