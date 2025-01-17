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


import { StandardImageTextBlock } from './standard-image-text-block';
import { TextComponent } from './text-component';

/**
 * Three standard images with text, presented across a single row.
 * @export
 * @interface StandardThreeImageTextModule
 */
export interface StandardThreeImageTextModule {
    /**
     * 
     * @type {TextComponent}
     * @memberof StandardThreeImageTextModule
     */
    headline?: TextComponent;
    /**
     * 
     * @type {StandardImageTextBlock}
     * @memberof StandardThreeImageTextModule
     */
    block1?: StandardImageTextBlock;
    /**
     * 
     * @type {StandardImageTextBlock}
     * @memberof StandardThreeImageTextModule
     */
    block2?: StandardImageTextBlock;
    /**
     * 
     * @type {StandardImageTextBlock}
     * @memberof StandardThreeImageTextModule
     */
    block3?: StandardImageTextBlock;
}


