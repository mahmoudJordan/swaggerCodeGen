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
import { AddEditCustomerSchoolModel } from './addEditCustomerSchoolModel';
import { AddEditCustomerUsersModel } from './addEditCustomerUsersModel';
import { AddressModel } from './addressModel';

export interface AddEditCustomerModel { 
    id?: number;
    type?: number;
    name?: string;
    webSiteURL?: string;
    additionalInfo?: string;
    locationId?: number;
    address?: AddressModel;
    schools?: Array<AddEditCustomerSchoolModel>;
    accounts?: Array<AddEditCustomerUsersModel>;
    contactIds?: Array<number>;
    createdById?: number;
}