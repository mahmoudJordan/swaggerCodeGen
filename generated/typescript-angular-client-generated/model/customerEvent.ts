/**
 * Api
 * API Description
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Customer } from './customer';
import { Event } from './event';

export interface CustomerEvent { 
    id?: number;
    eventsId?: number;
    event?: Event;
    customersId?: number;
    customer?: Customer;
}