/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for A+ Content Management
 * With the A+ Content API, you can build applications that help selling partners add rich marketing content to their Amazon product detail pages. A+ content helps selling partners share their brand and product story, which helps buyers make informed purchasing decisions. Selling partners assemble content by choosing from content modules and adding images and text.
 *
 * The version of the OpenAPI document: 2020-11-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ContentType } from './content-type';

/**
 * The full context for an A+ Content publishing event.
 * @export
 * @interface PublishRecord
 */
export interface PublishRecord {
    /**
     * The identifier for the marketplace where the A+ Content is published.
     * @type {string}
     * @memberof PublishRecord
     */
    marketplaceId: string;
    /**
     * The IETF language tag. This only supports the primary language subtag with one secondary language subtag. The secondary language subtag is almost always a regional designation. This does not support additional subtags beyond the primary and secondary subtags. **Pattern:** ^[a-z]{2,}-[A-Z0-9]{2,}$
     * @type {string}
     * @memberof PublishRecord
     */
    locale: string;
    /**
     * The Amazon Standard Identification Number (ASIN).
     * @type {string}
     * @memberof PublishRecord
     */
    asin: string;
    /**
     * 
     * @type {ContentType}
     * @memberof PublishRecord
     */
    contentType: ContentType;
    /**
     * The A+ Content document subtype. This represents a special-purpose type of an A+ Content document. Not every A+ Content document type will have a subtype, and subtypes may change at any time.
     * @type {string}
     * @memberof PublishRecord
     */
    contentSubType?: string;
    /**
     * A unique reference key for the A+ Content document. A content reference key cannot form a permalink and may change in the future. A content reference key is not guaranteed to match any A+ content identifier.
     * @type {string}
     * @memberof PublishRecord
     */
    contentReferenceKey: string;
}


