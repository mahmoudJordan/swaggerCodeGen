ublic apiV1CommonGetAllRolesTypeGet(type: number, observe?: 'body', reportProgress?: boolean): Observable<RegionsLocationsRolesModelStandardResponse>;
    public apiV1CommonGetAllRolesTypeGet(type: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RegionsLocationsRolesModelStandardResponse>>;
    public apiV1CommonGetAllRolesTypeGet(type: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RegionsLocationsRolesModelStandardResponse>>;
    public apiV1CommonGetAllRolesTypeGet(type: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (type === null || type === undefined) {
            throw new Error('Required parameter type was null or undefined when calling apiV1CommonGetAllRolesTypeGet.');
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<RegionsLocationsRolesModelStandardResponse>('get',`${this.basePath}/api/v1/Common/GetAllRoles/${encodeURIComponent(String(type))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Return all schools by customer
     * 
     * @param customerId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1CommonGetAllSchoolsByCustomerCustomerIdGet(customerId: number, observe?: 'body', reportProgress?: boolean): Observable<CommonModelListStandardResponse>;
    public apiV1CommonGetAllSchoolsByCustomerCustomerIdGet(customerId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CommonModelListStandardResponse>>;
    public apiV1CommonGetAllSchoolsByCustomerCustomerIdGet(customerId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CommonModelListStandardResponse>>;
    public apiV1CommonGetAllSchoolsByCustomerCustomerIdGet(customerId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (customerId === null || customerId === undefined) {
            throw new Error('Required parameter customerId was null or undefined when calling apiV1CommonGetAllSchoolsByCustomerCustomerIdGet.');
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<CommonModelListStandardResponse>('get',`${this.basePath}/api/v1/Common/GetAllSchoolsByCustomer/${encodeURIComponent(String(customerId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Return schools and districts (Customers)
     * 
     * @param locationId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1CommonGetAllSchoolsCustomersTogetherLocationIdGet(locationId: number, observe?: 'body', reportProgress?: boolean): Observable<SchoolsWithDistrictsWithGuardiansModelStandardResponse>;
    public apiV1CommonGetAllSchoolsCustomersTogetherLocationIdGet(locationId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SchoolsWithDistrictsWithGuardiansModelStandardResponse>>;
    public apiV1CommonGetAllSchoolsCustomersTogetherLocationIdGet(locationId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SchoolsWithDistrictsWithGuardiansModelStandardResponse>>;
    public apiV1CommonGetAllSchoolsCustomersTogetherLocationIdGet(locationId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling apiV1CommonGetAllSchoolsCustomersTogetherLocationIdGet.');
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<SchoolsWithDistrictsWithGuardiansModelStandardResponse>('get',`${this.basePath}/api/v1/Common/GetAllSchoolsCustomersTogether/${encodeURIComponent(String(locationId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Return all schools by location id
     * 
     * @param locationId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1CommonGetAllSchoolsLocationIdGet(locationId: number, observe?: 'body', reportProgress?: boolean): Observable<CommonModelListStandardResponse>;
    public apiV1CommonGetAllSchoolsLocationIdGet(locationId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CommonModelListStandardResponse>>;
    public apiV1CommonGetAllSchoolsLocationIdGet(locationId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CommonModelListStandardResponse>>;
    public apiV1CommonGetAllSchoolsLocationIdGet(locationId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling apiV1CommonGetAllSchoolsLocationIdGet.');
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<CommonModelListStandardResponse>('get',`${this.basePath}/api/v1/Common/GetAllSchools/${encodeURIComponent(String(locationId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param locationId 
     * @param customerId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1CommonGetAllSchoolsNotSelectedByCustomerLocationIdGet(locationId: number, customerId?: number, observe?: 'body', reportProgress?: boolean): Observable<CustomerSchoolsModelListStandardResponse>;
    public apiV1CommonGetAllSchoolsNotSelectedByCustomerLocationIdGet(locationId: number, customerId?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CustomerSchoolsModelListStandardResponse>>;
    public apiV1CommonGetAllSchoolsNotSelectedByCustomerLocationIdGet(locationId: number, customerId?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CustomerSchoolsModelListStandardResponse>>;
    public apiV1CommonGetAllSchoolsNotSelectedByCustomerLocationIdGet(locationId: number, customerId?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling apiV1CommonGetAllSchoolsNotSelectedByCustomerLocationIdGet.');
        }


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (customerId !== undefined && customerId !== null) {
            queryParameters = queryParameters.set('CustomerId', <any>customerId);
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<CustomerSchoolsModelListStandardResponse>('get',`${this.basePath}/api/v1/Common/GetAllSchoolsNotSelectedByCustomer/${encodeURIComponent(String(locationId))}`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param locationId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1CommonGetAllSchoolsWithoutCustomerLocationIdGet(locationId: number, observe?: 'body', reportProgress?: boolean): Observable<CommonModelListStandardResponse>;
    public apiV1CommonGetAllSchoolsWithoutCustomerLocationIdGet(locationId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CommonModelListStandardResponse>>;
    public apiV1CommonGetAllSchoolsWithoutCustomerLocationIdGet(locationId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CommonModelListStandardResponse>>;
    public apiV1CommonGetAllSchoolsWithoutCustomerLocationIdGet(locationId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling apiV1CommonGetAllSchoolsWithoutCustomerLocationIdGet.');
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<CommonModelListStandardResponse>('get',`${this.basePath}/api/v1/Common/GetAllSchoolsWithoutCustomer/${encodeURIComponent(String(locationId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param schoolId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1CommonGetAllStudentsBySchoolSchoolIdGet(schoolId: number, observe?: 'body', reportProgress?: boolean): Observable<CommonModelListStandardResponse>;
    public apiV1CommonGetAllStudentsBySchoolSchoolIdGet(schoolId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CommonModelListStandardResponse>>;
    public apiV1CommonGetAllStudentsBySchoolSchoolIdGet(schoolId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CommonModelListStandardResponse>>;
    public apiV1CommonGetAllStudentsBySchoolSchoolIdGet(schoolId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (schoolId === null || schoolId === undefined) {
            throw new Error('Required parameter schoolId was null or undefined when calling apiV1CommonGetAllStudentsBySchoolSchoolIdGet.');
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        re/**
 * Api
 * API Description
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { CommonModelListStandardResponse } from '../model/commonModelListStandardResponse';
import { CustomerSchoolsModelListStandardResponse } from '../model/customerSchoolsModelListStandardResponse';
import { RegionsLocationsRolesModelStandardResponse } from '../model/regionsLocationsRolesModelStandardResponse';
import { SchoolsWithDistrictsWithGuardiansModelStandardResponse } from '../model/schoolsWithDistrictsWithGuardiansModelStandardResponse';
import { StandardFailMobileResponse } from '../model/standardFailMobileResponse';
import { StringStandardResponse } from '../model/stringStandardResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class CommonApiService {

    protected basePath = '/';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * 
     * 
     * @param type 
     * @param parentType 
     * @param parentId 
     * @param firebasedocumentId 
     * @param dbId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1CommonChangeNotificationsStatusTypeGet(type: string, parentType?: string, parentId?: number, firebasedocumentId?: string, dbId?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1CommonChangeNotificationsStatusTypeGet(type: string, parentType?: string, parentId?: number, firebasedocumentId?: string, dbId?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiV1CommonChangeNotificationsStatusTypeGet(type: string, parentType?: string, parentId?: number, firebasedocumentId?: string, dbId?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1CommonChangeNotificationsStatusTypeGet(type: string, parentType?: string, parentId?: number, firebasedocumentId?: string, dbId?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (type === null || type === undefined) {
            throw new Error('Required parameter type was null or undefined when calling apiV1CommonChangeNotificationsStatusTypeGet.');
        }





        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (parentType !== undefined && parentType !== null) {
            queryParameters = queryParameters.set('ParentType', <any>parentType);
        }
        if (parentId !== undefined && parentId !== null) {
            queryParameters = queryParameters.set('ParentId', <any>parentId);
        }
        if (firebasedocumentId !== undefined && firebasedocumentId !== null) {
            queryParameters = queryParameters.set('firebasedocumentId', <any>firebasedocumentId);
        }
        if (dbId !== undefined && dbId !== null) {
            queryParameters = queryParameters.set('dbId', <any>dbId);
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<any>('get',`${this.basePath}/api/v1/Common/ChangeNotificationsStatus/${encodeURIComponent(String(type))}`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Return all districts (Customers)
     * 
     * @param locationId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1CommonGetAllCustomersLocationIdGet(locationId: number, observe?: 'body', reportProgress?: boolean): Observable<CommonModelListStandardResponse>;
    public apiV1CommonGetAllCustomersLocationIdGet(locationId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CommonModelListStandardResponse>>;
    public apiV1CommonGetAllCustomersLocationIdGet(locationId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CommonModelListStandardResponse>>;
    public apiV1CommonGetAllCustomersLocationIdGet(locationId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling apiV1CommonGetAllCustomersLocationIdGet.');
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<CommonModelListStandardResponse>('get',`${this.basePath}/api/v1/Common/GetAllCustomers/${encodeURIComponent(String(locationId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Return all locations
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1CommonGetAllLocationsGet(observe?: 'body', reportProgress?: boolean): Observable<CommonModelListStandardResponse>;
    public apiV1CommonGetAllLocationsGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CommonModelListStandardResponse>>;
    public apiV1CommonGetAllLocationsGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CommonModelListStandardResponse>>;
    public apiV1CommonGetAllLocationsGet(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<CommonModelListStandardResponse>('get',`${this.basePath}/api/v1/Common/GetAllLocations`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Return all regions
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1CommonGetAllRegionsGet(observe?: 'body', reportProgress?: boolean): Observable<CommonModelListStandardResponse>;
    public apiV1CommonGetAllRegionsGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CommonModelListStandardResponse>>;
    public apiV1CommonGetAllRegionsGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CommonModelListStandardResponse>>;
    public apiV1CommonGetAllRegionsGet(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<CommonModelListStandardResponse>('get',`${this.basePath}/api/v1/Common/GetAllRegions`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Return regions ,locations, roles together
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1CommonGetAllRegionsLocationsRolesTogetherGet(observe?: 'body', reportProgress?: boolean): Observable<RegionsLocationsRolesModelStandardResponse>;
    public apiV1CommonGetAllRegionsLocationsRolesTogetherGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RegionsLocationsRolesModelStandardResponse>>;
    public apiV1CommonGetAllRegionsLocationsRolesTogetherGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RegionsLocationsRolesModelStandardResponse>>;
    public apiV1CommonGetAllRegionsLocationsRolesTogetherGet(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<RegionsLocationsRolesModelStandardResponse>('get',`${this.basePath}/api/v1/Common/GetAllRegionsLocationsRolesTogether`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Return regions ,locations,  together
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1CommonGetAllRegionsLocationsTogetherGet(observe?: 'body', reportProgress?: boolean): Observable<RegionsLocationsRolesModelStandardResponse>;
    public apiV1CommonGetAllRegionsLocationsTogetherGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RegionsLocationsRolesModelStandardResponse>>;
    public apiV1CommonGetAllRegionsLocationsTogetherGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RegionsLocationsRolesModelStandardResponse>>;
    public apiV1CommonGetAllRegionsLocationsTogetherGet(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<RegionsLocationsRolesModelStandardResponse>('get',`${this.basePath}/api/v1/Common/GetAllRegionsLocationsTogether`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param type 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    pturn this.httpClient.request<CommonModelListStandardResponse>('get',`${this.basePath}/api/v1/Common/GetAllStudentsBySchool/${encodeURIComponent(String(schoolId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param name 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1CommonGetSpecificConfigrationNameGet(name: string, observe?: 'body', reportProgress?: boolean): Observable<StringStandardResponse>;
    public apiV1CommonGetSpecificConfigrationNameGet(name: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<StringStandardResponse>>;
    public apiV1CommonGetSpecificConfigrationNameGet(name: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<StringStandardResponse>>;
    public apiV1CommonGetSpecificConfigrationNameGet(name: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling apiV1CommonGetSpecificConfigrationNameGet.');
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<StringStandardResponse>('get',`${this.basePath}/api/v1/Common/GetSpecificConfigration/${encodeURIComponent(String(name))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param roleId 
     * @param locationId 
     * @param isForFilter 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1SystemUsersGetSystemUsersByRoleIdRoleIdLocationIdIsForFilterGet(roleId: number, locationId: number, isForFilter: boolean, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1SystemUsersGetSystemUsersByRoleIdRoleIdLocationIdIsForFilterGet(roleId: number, locationId: number, isForFilter: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiV1SystemUsersGetSystemUsersByRoleIdRoleIdLocationIdIsForFilterGet(roleId: number, locationId: number, isForFilter: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1SystemUsersGetSystemUsersByRoleIdRoleIdLocationIdIsForFilterGet(roleId: number, locationId: number, isForFilter: boolean, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (roleId === null || roleId === undefined) {
            throw new Error('Required parameter roleId was null or undefined when calling apiV1SystemUsersGetSystemUsersByRoleIdRoleIdLocationIdIsForFilterGet.');
        }

        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling apiV1SystemUsersGetSystemUsersByRoleIdRoleIdLocationIdIsForFilterGet.');
        }

        if (isForFilter === null || isForFilter === undefined) {
            throw new Error('Required parameter isForFilter was null or undefined when calling apiV1SystemUsersGetSystemUsersByRoleIdRoleIdLocationIdIsForFilterGet.');
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<any>('get',`${this.basePath}/api/v1/SystemUsers/GetSystemUsersByRoleId/${encodeURIComponent(String(roleId))}/${encodeURIComponent(String(locationId))}/${encodeURIComponent(String(isForFilter))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
