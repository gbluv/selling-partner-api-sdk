/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Catalog Items
 * The Selling Partner API for Catalog Items provides programmatic access to information about items in the Amazon catalog.  For more information, see the [Catalog Items API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/catalog-items-api-v2020-12-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2020-12-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ItemIdentifier } from './item-identifier';

/**
 * Identifiers associated with the item in the Amazon catalog for the indicated Amazon marketplace.
 * @export
 * @interface ItemIdentifiersByMarketplace
 */
export interface ItemIdentifiersByMarketplace {
    /**
     * Amazon marketplace identifier.
     * @type {string}
     * @memberof ItemIdentifiersByMarketplace
     */
    marketplaceId: string;
    /**
     * Identifiers associated with the item in the Amazon catalog for the indicated Amazon marketplace.
     * @type {Array<ItemIdentifier>}
     * @memberof ItemIdentifiersByMarketplace
     */
    identifiers: Array<ItemIdentifier>;
}


