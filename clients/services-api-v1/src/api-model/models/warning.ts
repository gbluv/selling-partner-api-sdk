/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Services
 * With the Services API, you can build applications that help service providers get and modify their service orders.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Warning returned when the request is successful but execution have some important callouts on basis of which API clients should take defined actions.
 * @export
 * @interface Warning
 */
export interface Warning {
    /**
     * An warning code that identifies the type of warning that occurred.
     * @type {string}
     * @memberof Warning
     */
    code: string;
    /**
     * A message that describes the warning condition in a human-readable form.
     * @type {string}
     * @memberof Warning
     */
    message: string;
    /**
     * Additional details that can help the caller understand or address the warning.
     * @type {string}
     * @memberof Warning
     */
    details?: string;
}


