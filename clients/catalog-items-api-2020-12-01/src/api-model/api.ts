/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Catalog Items
 * The Selling Partner API for Catalog Items provides programmatic access to information about items in the Amazon catalog.
 *
 * The version of the OpenAPI document: 2020-12-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * A list of error responses returned when a request is unsuccessful.
 * @export
 * @interface ErrorList
 */
export interface ErrorList {
    /**
     * 
     * @type {Array<Error>}
     * @memberof ErrorList
     */
    errors: Array<Error>;
}
/**
 * An item in the Amazon catalog.
 * @export
 * @interface Item
 */
export interface Item {
    /**
     * Amazon Standard Identification Number (ASIN) is the unique identifier for an item in the Amazon catalog.
     * @type {string}
     * @memberof Item
     */
    asin: string;
    /**
     * A JSON object that contains structured item attribute data keyed by attribute name. Catalog item attributes are available only to brand owners.
     * @type {object}
     * @memberof Item
     */
    attributes?: object;
    /**
     * Identifiers associated with the item in the Amazon catalog, such as UPC and EAN identifiers.
     * @type {Array<ItemIdentifiersByMarketplace>}
     * @memberof Item
     */
    identifiers?: Array<ItemIdentifiersByMarketplace>;
    /**
     * Images for an item in the Amazon catalog. All image variants are provided to brand owners. Otherwise, a thumbnail of the \"MAIN\" image variant is provided.
     * @type {Array<ItemImagesByMarketplace>}
     * @memberof Item
     */
    images?: Array<ItemImagesByMarketplace>;
    /**
     * Product types associated with the Amazon catalog item.
     * @type {Array<ItemProductTypeByMarketplace>}
     * @memberof Item
     */
    productTypes?: Array<ItemProductTypeByMarketplace>;
    /**
     * Sales ranks of an Amazon catalog item.
     * @type {Array<ItemSalesRanksByMarketplace>}
     * @memberof Item
     */
    salesRanks?: Array<ItemSalesRanksByMarketplace>;
    /**
     * Summary details of an Amazon catalog item.
     * @type {Array<ItemSummaryByMarketplace>}
     * @memberof Item
     */
    summaries?: Array<ItemSummaryByMarketplace>;
    /**
     * Variation details by marketplace for an Amazon catalog item (variation relationships).
     * @type {Array<ItemVariationsByMarketplace>}
     * @memberof Item
     */
    variations?: Array<ItemVariationsByMarketplace>;
    /**
     * Vendor details associated with an Amazon catalog item. Vendor details are available to vendors only.
     * @type {Array<ItemVendorDetailsByMarketplace>}
     * @memberof Item
     */
    vendorDetails?: Array<ItemVendorDetailsByMarketplace>;
}
/**
 * Identifier associated with the item in the Amazon catalog, such as a UPC or EAN identifier.
 * @export
 * @interface ItemIdentifier
 */
export interface ItemIdentifier {
    /**
     * Type of identifier, such as UPC, EAN, or ISBN.
     * @type {string}
     * @memberof ItemIdentifier
     */
    identifierType: string;
    /**
     * Identifier.
     * @type {string}
     * @memberof ItemIdentifier
     */
    identifier: string;
}
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
/**
 * Image for an item in the Amazon catalog.
 * @export
 * @interface ItemImage
 */
export interface ItemImage {
    /**
     * Variant of the image, such as MAIN or PT01.
     * @type {string}
     * @memberof ItemImage
     */
    variant: ItemImageVariantEnum;
    /**
     * Link, or URL, for the image.
     * @type {string}
     * @memberof ItemImage
     */
    link: string;
    /**
     * Height of the image in pixels.
     * @type {number}
     * @memberof ItemImage
     */
    height: number;
    /**
     * Width of the image in pixels.
     * @type {number}
     * @memberof ItemImage
     */
    width: number;
}

/**
    * @export
    * @enum {string}
    */
export enum ItemImageVariantEnum {
    Main = 'MAIN',
    Pt01 = 'PT01',
    Pt02 = 'PT02',
    Pt03 = 'PT03',
    Pt04 = 'PT04',
    Pt05 = 'PT05',
    Pt06 = 'PT06',
    Pt07 = 'PT07',
    Pt08 = 'PT08',
    Swch = 'SWCH'
}

/**
 * Images for an item in the Amazon catalog for the indicated Amazon marketplace.
 * @export
 * @interface ItemImagesByMarketplace
 */
export interface ItemImagesByMarketplace {
    /**
     * Amazon marketplace identifier.
     * @type {string}
     * @memberof ItemImagesByMarketplace
     */
    marketplaceId: string;
    /**
     * Images for an item in the Amazon catalog for the indicated Amazon marketplace.
     * @type {Array<ItemImage>}
     * @memberof ItemImagesByMarketplace
     */
    images: Array<ItemImage>;
}
/**
 * Product type associated with the Amazon catalog item for the indicated Amazon marketplace.
 * @export
 * @interface ItemProductTypeByMarketplace
 */
export interface ItemProductTypeByMarketplace {
    /**
     * Amazon marketplace identifier.
     * @type {string}
     * @memberof ItemProductTypeByMarketplace
     */
    marketplaceId?: string;
    /**
     * Name of the product type associated with the Amazon catalog item.
     * @type {string}
     * @memberof ItemProductTypeByMarketplace
     */
    productType?: string;
}
/**
 * Sales rank of an Amazon catalog item.
 * @export
 * @interface ItemSalesRank
 */
export interface ItemSalesRank {
    /**
     * Title, or name, of the sales rank.
     * @type {string}
     * @memberof ItemSalesRank
     */
    title: string;
    /**
     * Corresponding Amazon retail website link, or URL, for the sales rank.
     * @type {string}
     * @memberof ItemSalesRank
     */
    link?: string;
    /**
     * Sales rank value.
     * @type {number}
     * @memberof ItemSalesRank
     */
    rank: number;
}
/**
 * Sales ranks of an Amazon catalog item for the indicated Amazon marketplace.
 * @export
 * @interface ItemSalesRanksByMarketplace
 */
export interface ItemSalesRanksByMarketplace {
    /**
     * Amazon marketplace identifier.
     * @type {string}
     * @memberof ItemSalesRanksByMarketplace
     */
    marketplaceId: string;
    /**
     * Sales ranks of an Amazon catalog item for an Amazon marketplace.
     * @type {Array<ItemSalesRank>}
     * @memberof ItemSalesRanksByMarketplace
     */
    ranks: Array<ItemSalesRank>;
}
/**
 * Summary details of an Amazon catalog item for the indicated Amazon marketplace.
 * @export
 * @interface ItemSummaryByMarketplace
 */
export interface ItemSummaryByMarketplace {
    /**
     * Amazon marketplace identifier.
     * @type {string}
     * @memberof ItemSummaryByMarketplace
     */
    marketplaceId: string;
    /**
     * Name of the brand associated with an Amazon catalog item.
     * @type {string}
     * @memberof ItemSummaryByMarketplace
     */
    brandName?: string;
    /**
     * Identifier of the browse node associated with an Amazon catalog item.
     * @type {string}
     * @memberof ItemSummaryByMarketplace
     */
    browseNode?: string;
    /**
     * Name of the color associated with an Amazon catalog item.
     * @type {string}
     * @memberof ItemSummaryByMarketplace
     */
    colorName?: string;
    /**
     * Name, or title, associated with an Amazon catalog item.
     * @type {string}
     * @memberof ItemSummaryByMarketplace
     */
    itemName?: string;
    /**
     * Name of the manufacturer associated with an Amazon catalog item.
     * @type {string}
     * @memberof ItemSummaryByMarketplace
     */
    manufacturer?: string;
    /**
     * Model number associated with an Amazon catalog item.
     * @type {string}
     * @memberof ItemSummaryByMarketplace
     */
    modelNumber?: string;
    /**
     * Name of the size associated with an Amazon catalog item.
     * @type {string}
     * @memberof ItemSummaryByMarketplace
     */
    sizeName?: string;
    /**
     * Name of the style associated with an Amazon catalog item.
     * @type {string}
     * @memberof ItemSummaryByMarketplace
     */
    styleName?: string;
}
/**
 * Variation details for the Amazon catalog item for the indicated Amazon marketplace.
 * @export
 * @interface ItemVariationsByMarketplace
 */
export interface ItemVariationsByMarketplace {
    /**
     * Amazon marketplace identifier.
     * @type {string}
     * @memberof ItemVariationsByMarketplace
     */
    marketplaceId: string;
    /**
     * Identifiers (ASINs) of the related items.
     * @type {Array<string>}
     * @memberof ItemVariationsByMarketplace
     */
    asins: Array<string>;
    /**
     * Type of variation relationship of the Amazon catalog item in the request to the related item(s): \"PARENT\" or \"CHILD\".
     * @type {string}
     * @memberof ItemVariationsByMarketplace
     */
    variationType: ItemVariationsByMarketplaceVariationTypeEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum ItemVariationsByMarketplaceVariationTypeEnum {
    Parent = 'PARENT',
    Child = 'CHILD'
}

/**
 * Vendor details associated with an Amazon catalog item for the indicated Amazon marketplace.
 * @export
 * @interface ItemVendorDetailsByMarketplace
 */
export interface ItemVendorDetailsByMarketplace {
    /**
     * Amazon marketplace identifier.
     * @type {string}
     * @memberof ItemVendorDetailsByMarketplace
     */
    marketplaceId: string;
    /**
     * Brand code associated with an Amazon catalog item.
     * @type {string}
     * @memberof ItemVendorDetailsByMarketplace
     */
    brandCode?: string;
    /**
     * Product category associated with an Amazon catalog item.
     * @type {string}
     * @memberof ItemVendorDetailsByMarketplace
     */
    categoryCode?: string;
    /**
     * Manufacturer code associated with an Amazon catalog item.
     * @type {string}
     * @memberof ItemVendorDetailsByMarketplace
     */
    manufacturerCode?: string;
    /**
     * Parent vendor code of the manufacturer code.
     * @type {string}
     * @memberof ItemVendorDetailsByMarketplace
     */
    manufacturerCodeParent?: string;
    /**
     * Product group associated with an Amazon catalog item.
     * @type {string}
     * @memberof ItemVendorDetailsByMarketplace
     */
    productGroup?: string;
    /**
     * Replenishment category associated with an Amazon catalog item.
     * @type {string}
     * @memberof ItemVendorDetailsByMarketplace
     */
    replenishmentCategory?: ItemVendorDetailsByMarketplaceReplenishmentCategoryEnum;
    /**
     * Product subcategory associated with an Amazon catalog item.
     * @type {string}
     * @memberof ItemVendorDetailsByMarketplace
     */
    subcategoryCode?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum ItemVendorDetailsByMarketplaceReplenishmentCategoryEnum {
    Allocated = 'ALLOCATED',
    BasicReplenishment = 'BASIC_REPLENISHMENT',
    InSeason = 'IN_SEASON',
    LimitedReplenishment = 'LIMITED_REPLENISHMENT',
    ManufacturerOutOfStock = 'MANUFACTURER_OUT_OF_STOCK',
    NewProduct = 'NEW_PRODUCT',
    NonReplenishable = 'NON_REPLENISHABLE',
    NonStockupable = 'NON_STOCKUPABLE',
    Obsolete = 'OBSOLETE',
    PlannedReplenishment = 'PLANNED_REPLENISHMENT'
}

/**
 * Error response returned when the request is unsuccessful.
 * @export
 * @interface ModelError
 */
export interface ModelError {
    /**
     * An error code that identifies the type of error that occurred.
     * @type {string}
     * @memberof ModelError
     */
    code: string;
    /**
     * A message that describes the error condition.
     * @type {string}
     * @memberof ModelError
     */
    message: string;
    /**
     * Additional details that can help the caller understand or fix the issue.
     * @type {string}
     * @memberof ModelError
     */
    details?: string;
}

/**
 * CatalogApi - axios parameter creator
 * @export
 */
export const CatalogApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieves details for an item in the Amazon catalog.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 5 | 5 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} asin The Amazon Standard Identification Number (ASIN) of the item.
         * @param {Array<string>} marketplaceIds A comma-delimited list of Amazon marketplace identifiers. Data sets in the response contain data only for the specified marketplaces.
         * @param {Array<'attributes' | 'identifiers' | 'images' | 'productTypes' | 'salesRanks' | 'summaries' | 'variations' | 'vendorDetails'>} [includedData] A comma-delimited list of data sets to include in the response.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCatalogItem: async (asin: string, marketplaceIds: Array<string>, includedData?: Array<'attributes' | 'identifiers' | 'images' | 'productTypes' | 'salesRanks' | 'summaries' | 'variations' | 'vendorDetails'>, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'asin' is not null or undefined
            assertParamExists('getCatalogItem', 'asin', asin)
            // verify required parameter 'marketplaceIds' is not null or undefined
            assertParamExists('getCatalogItem', 'marketplaceIds', marketplaceIds)
            const localVarPath = `/catalog/2020-12-01/items/{asin}`
                .replace(`{${"asin"}}`, encodeURIComponent(String(asin)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (marketplaceIds) {
                localVarQueryParameter['marketplaceIds'] = marketplaceIds.join(COLLECTION_FORMATS.csv);
            }

            if (includedData) {
                localVarQueryParameter['includedData'] = includedData.join(COLLECTION_FORMATS.csv);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CatalogApi - functional programming interface
 * @export
 */
export const CatalogApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CatalogApiAxiosParamCreator(configuration)
    return {
        /**
         * Retrieves details for an item in the Amazon catalog.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 5 | 5 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} asin The Amazon Standard Identification Number (ASIN) of the item.
         * @param {Array<string>} marketplaceIds A comma-delimited list of Amazon marketplace identifiers. Data sets in the response contain data only for the specified marketplaces.
         * @param {Array<'attributes' | 'identifiers' | 'images' | 'productTypes' | 'salesRanks' | 'summaries' | 'variations' | 'vendorDetails'>} [includedData] A comma-delimited list of data sets to include in the response.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCatalogItem(asin: string, marketplaceIds: Array<string>, includedData?: Array<'attributes' | 'identifiers' | 'images' | 'productTypes' | 'salesRanks' | 'summaries' | 'variations' | 'vendorDetails'>, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Item>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCatalogItem(asin, marketplaceIds, includedData, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CatalogApi - factory interface
 * @export
 */
export const CatalogApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CatalogApiFp(configuration)
    return {
        /**
         * Retrieves details for an item in the Amazon catalog.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 5 | 5 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} asin The Amazon Standard Identification Number (ASIN) of the item.
         * @param {Array<string>} marketplaceIds A comma-delimited list of Amazon marketplace identifiers. Data sets in the response contain data only for the specified marketplaces.
         * @param {Array<'attributes' | 'identifiers' | 'images' | 'productTypes' | 'salesRanks' | 'summaries' | 'variations' | 'vendorDetails'>} [includedData] A comma-delimited list of data sets to include in the response.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCatalogItem(asin: string, marketplaceIds: Array<string>, includedData?: Array<'attributes' | 'identifiers' | 'images' | 'productTypes' | 'salesRanks' | 'summaries' | 'variations' | 'vendorDetails'>, options?: any): AxiosPromise<Item> {
            return localVarFp.getCatalogItem(asin, marketplaceIds, includedData, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CatalogApi - object-oriented interface
 * @export
 * @class CatalogApi
 * @extends {BaseAPI}
 */
export class CatalogApi extends BaseAPI {
    /**
     * Retrieves details for an item in the Amazon catalog.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 5 | 5 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
     * @param {string} asin The Amazon Standard Identification Number (ASIN) of the item.
     * @param {Array<string>} marketplaceIds A comma-delimited list of Amazon marketplace identifiers. Data sets in the response contain data only for the specified marketplaces.
     * @param {Array<'attributes' | 'identifiers' | 'images' | 'productTypes' | 'salesRanks' | 'summaries' | 'variations' | 'vendorDetails'>} [includedData] A comma-delimited list of data sets to include in the response.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CatalogApi
     */
    public getCatalogItem(asin: string, marketplaceIds: Array<string>, includedData?: Array<'attributes' | 'identifiers' | 'images' | 'productTypes' | 'salesRanks' | 'summaries' | 'variations' | 'vendorDetails'>, options?: any) {
        return CatalogApiFp(this.configuration).getCatalogItem(asin, marketplaceIds, includedData, options).then((request) => request(this.axios, this.basePath));
    }
}


