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
import { StudentsGradesEnum } from './studentsGradesEnum';

export interface StudentsDto { 
    firstName?: string;
    lastName?: string;
    sasid?: string;
    lasid?: string;
    customerId?: number;
    schoolId?: number;
    locationId?: number;
    address?: AddressModel;
    grade?: StudentsGradesEnum;
}