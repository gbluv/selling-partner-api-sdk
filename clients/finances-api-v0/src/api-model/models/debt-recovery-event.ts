/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Finances
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller\'s business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ChargeInstrument } from './charge-instrument';
import { Currency } from './currency';
import { DebtRecoveryItem } from './debt-recovery-item';

/**
 * A debt payment or debt adjustment.
 * @export
 * @interface DebtRecoveryEvent
 */
export interface DebtRecoveryEvent {
    /**
     * The debt recovery type.  Possible values:  * DebtPayment  * DebtPaymentFailure  *DebtAdjustment
     * @type {string}
     * @memberof DebtRecoveryEvent
     */
    DebtRecoveryType?: string;
    /**
     * 
     * @type {Currency}
     * @memberof DebtRecoveryEvent
     */
    RecoveryAmount?: Currency;
    /**
     * 
     * @type {Currency}
     * @memberof DebtRecoveryEvent
     */
    OverPaymentCredit?: Currency;
    /**
     * A list of debt recovery item information.
     * @type {Array<DebtRecoveryItem>}
     * @memberof DebtRecoveryEvent
     */
    DebtRecoveryItemList?: Array<DebtRecoveryItem>;
    /**
     * A list of payment instruments.
     * @type {Array<ChargeInstrument>}
     * @memberof DebtRecoveryEvent
     */
    ChargeInstrumentList?: Array<ChargeInstrument>;
}


