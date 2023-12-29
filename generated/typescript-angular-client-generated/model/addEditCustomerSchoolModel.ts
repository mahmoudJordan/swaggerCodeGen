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
import { AddressModel } from './addressModel';

export interface AddEditCustomerSchoolModel { 
    id?: number;
    staticId?: number;
    customerId?: number;
    name?: string;
    locationId?: number;
    websiteURL?: string;
    additionalInfo?: string;
    address?: AddressModel;
    createdById?: number;
    isSelected?: boolean;
}