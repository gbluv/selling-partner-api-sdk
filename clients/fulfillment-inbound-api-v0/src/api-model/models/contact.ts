/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Fulfillment Inbound
 * The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon\'s fulfillment network.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Contact information for the person in the seller\'s organization who is responsible for a Less Than Truckload/Full Truckload (LTL/FTL) shipment.
 * @export
 * @interface Contact
 */
export interface Contact {
    /**
     * The name of the contact person.
     * @type {string}
     * @memberof Contact
     */
    Name: string;
    /**
     * The phone number of the contact person.
     * @type {string}
     * @memberof Contact
     */
    Phone: string;
    /**
     * The email address of the contact person.
     * @type {string}
     * @memberof Contact
     */
    Email: string;
    /**
     * The fax number of the contact person.
     * @type {string}
     * @memberof Contact
     */
    Fax?: string;
}

