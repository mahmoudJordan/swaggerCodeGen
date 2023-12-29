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

export interface IncidentReportModel { 
    id?: number;
    routeNumber?: string;
    customerId?: number;
    customerName?: string;
    incedantDate?: string;
    incedantTime?: string;
    incedantDateWithTime?: string;
    incidentType?: string;
    incidentTypeId?: number;
    districtNote?: string;
    routeType?: string;
    routeTypeId?: number;
    additionalInfo?: string;
    driverId?: number;
    driverName?: string;
    repeatOffender?: number;
    schoolId?: number;
    schoolName?: string;
    studentId?: number;
    studentName?: string;
    attention?: number;
    status?: string;
    ordering?: number;
    createdAt?: Date;
}