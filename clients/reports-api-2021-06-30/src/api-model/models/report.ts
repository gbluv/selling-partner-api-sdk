/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Reports
 * The Selling Partner API for Reports lets you retrieve and manage a variety of reports that can help selling partners manage their businesses.
 *
 * The version of the OpenAPI document: 2021-06-30
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Detailed information about the report.
 * @export
 * @interface Report
 */
export interface Report {
    /**
     * A list of marketplace identifiers for the report.
     * @type {Array<string>}
     * @memberof Report
     */
    marketplaceIds?: Array<string>;
    /**
     * The identifier for the report. This identifier is unique only in combination with a seller ID.
     * @type {string}
     * @memberof Report
     */
    reportId: string;
    /**
     * The report type.
     * @type {string}
     * @memberof Report
     */
    reportType: string;
    /**
     * The start of a date and time range used for selecting the data to report.
     * @type {string}
     * @memberof Report
     */
    dataStartTime?: string;
    /**
     * The end of a date and time range used for selecting the data to report.
     * @type {string}
     * @memberof Report
     */
    dataEndTime?: string;
    /**
     * The identifier of the report schedule that created this report (if any). This identifier is unique only in combination with a seller ID.
     * @type {string}
     * @memberof Report
     */
    reportScheduleId?: string;
    /**
     * The date and time when the report was created.
     * @type {string}
     * @memberof Report
     */
    createdTime: string;
    /**
     * The processing status of the report.
     * @type {string}
     * @memberof Report
     */
    processingStatus: ReportProcessingStatusEnum;
    /**
     * The date and time when the report processing started, in ISO 8601 date time format.
     * @type {string}
     * @memberof Report
     */
    processingStartTime?: string;
    /**
     * The date and time when the report processing completed, in ISO 8601 date time format.
     * @type {string}
     * @memberof Report
     */
    processingEndTime?: string;
    /**
     * The identifier for the report document. Pass this into the getReportDocument operation to get the information you will need to retrieve the report document\'s contents.
     * @type {string}
     * @memberof Report
     */
    reportDocumentId?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum ReportProcessingStatusEnum {
    Cancelled = 'CANCELLED',
    Done = 'DONE',
    Fatal = 'FATAL',
    InProgress = 'IN_PROGRESS',
    InQueue = 'IN_QUEUE'
}



