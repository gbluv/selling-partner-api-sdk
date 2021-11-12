/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Listings Restrictions
 * The Selling Partner API for Listings Restrictions provides programmatic access to restrictions on Amazon catalog listings.  For more information, see the [Listings Restrictions API Use Case Guide](https://github.com/amzn/selling-partner-api-docs/blob/main/guides/en-US/use-case-guides/listings-restrictions-api-use-case-guide/listings-restrictions-api-use-case-guide_2021-08-01.md).
 *
 * The version of the OpenAPI document: 2021-08-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Reason } from './reason';

/**
 * A listing restriction, optionally qualified by a condition, with a list of reasons for the restriction.
 * @export
 * @interface Restriction
 */
export interface Restriction {
    /**
     * A marketplace identifier. Identifies the Amazon marketplace where the restriction is enforced.
     * @type {string}
     * @memberof Restriction
     */
    marketplaceId: string;
    /**
     * The condition that applies to the restriction.
     * @type {string}
     * @memberof Restriction
     */
    conditionType?: RestrictionConditionTypeEnum;
    /**
     * A list of reasons for the restriction.
     * @type {Array<Reason>}
     * @memberof Restriction
     */
    reasons?: Array<Reason>;
}

/**
    * @export
    * @enum {string}
    */
export enum RestrictionConditionTypeEnum {
    NewNew = 'new_new',
    NewOpenBox = 'new_open_box',
    NewOem = 'new_oem',
    RefurbishedRefurbished = 'refurbished_refurbished',
    UsedLikeNew = 'used_like_new',
    UsedVeryGood = 'used_very_good',
    UsedGood = 'used_good',
    UsedAcceptable = 'used_acceptable',
    CollectibleLikeNew = 'collectible_like_new',
    CollectibleVeryGood = 'collectible_very_good',
    CollectibleGood = 'collectible_good',
    CollectibleAcceptable = 'collectible_acceptable',
    ClubClub = 'club_club'
}


