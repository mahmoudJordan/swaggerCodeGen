 = 'body', reportProgress: boolean = false ): Observable<any> {

        if (accountId === null || accountId === undefined) {
            throw new Error('Required parameter accountId was null or undefined when calling apiV1CustomersDeleteCustomerUsersAccountIdDelete.');
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

        return this.httpClient.request<any>('delete',`${this.basePath}/api/v1/Customers/DeleteCustomerUsers/${encodeURIComponent(String(accountId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Edit School
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1CustomersEditCustomerSchoolsPut(body?: AddEditCustomerSchoolModel, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1CustomersEditCustomerSchoolsPut(body?: AddEditCustomerSchoolModel, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiV1CustomersEditCustomerSchoolsPut(body?: AddEditCustomerSchoolModel, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1CustomersEditCustomerSchoolsPut(body?: AddEditCustomerSchoolModel, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<any>('put',`${this.basePath}/api/v1/Customers/EditCustomerSchools`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Edit customers users
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1CustomersEditCustomerUsersPut(body?: AddEditCustomerUsersModel, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1CustomersEditCustomerUsersPut(body?: AddEditCustomerUsersModel, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiV1CustomersEditCustomerUsersPut(body?: AddEditCustomerUsersModel, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1CustomersEditCustomerUsersPut(body?: AddEditCustomerUsersModel, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<any>('put',`${this.basePath}/api/v1/Customers/EditCustomerUsers`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Edit customer
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1CustomersEditCustomersPut(body?: AddEditCustomerModel, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1CustomersEditCustomersPut(body?: AddEditCustomerModel, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiV1CustomersEditCustomersPut(body?: AddEditCustomerModel, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1CustomersEditCustomersPut(body?: AddEditCustomerModel, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<any>('put',`${this.basePath}/api/v1/Customers/EditCustomers`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Return list of customers School
     * 
     * @param customerId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1CustomersGetAllCustomerSchoolsCustomerIdGet(customerId: number, observe?: 'body', reportProgress?: boolean): Observable<GetCustomersSchoolListStandardResponse>;
    public apiV1CustomersGetAllCustomerSchoolsCustomerIdGet(customerId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetCustomersSchoolListStandardResponse>>;
    public apiV1CustomersGetAllCustomerSchoolsCustomerIdGet(customerId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetCustomersSchoolListStandardResponse>>;
    public apiV1CustomersGetAllCustomerSchoolsCustomerIdGet(customerId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (customerId === null || customerId === undefined) {
            throw new Error('Required parameter customerId was null or undefined when calling apiV1CustomersGetAllCustomerSchoolsCustomerIdGet.');
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

        return this.httpClient.request<GetCustomersSchoolListStandardResponse>('get',`${this.basePath}/api/v1/Customers/GetAllCustomerSchools/${encodeURIComponent(String(customerId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Return customers users data by id
     * 
     * @param accountId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1CustomersGetAllCustomerUsersByIdAccountIdGet(accountId: number, observe?: 'body', reportProgress?: boolean): Observable<CustomerAccountsModelStandardResponse>;
    public apiV1CustomersGetAllCustomerUsersByIdAccountIdGet(accountId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CustomerAccountsModelStandardResponse>>;
    public apiV1CustomersGetAllCustomerUsersByIdAccountIdGet(accountId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CustomerAccountsModelStandardResponse>>;
    public apiV1CustomersGetAllCustomerUsersByIdAccountIdGet(accountId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (accountId === null || accountId === undefined) {
            throw new Error('Required parameter accountId was null or undefined when calling apiV1CustomersGetAllCustomerUsersByIdAccountIdGet.');
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

        return this.httpClient.request<CustomerAccountsModelStandardResponse>('get',`${this.basePath}/api/v1/Customers/GetAllCustomerUsersById/${encodeURIComponent(String(accountId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Return list of customers users
     * 
     * @param customerId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1CustomersGetAllCustomerUsersCustomerIdGet(customerId: number, observe?: 'body', reportProgress?: boolean): Observable<CustomerAccountsModelListStandardResponse>;
    public apiV1CustomersGetAllCustomerUsersCustomerIdGet(customerId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CustomerAccountsModelListStandardResponse>>;
    public apiV1CustomersGetAllCustomerUsersCustomerIdGet(customerId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CustomerAccountsModelListStandardResponse>>;
    public apiV1CustomersGetAllCustomerUsersCustomerIdGet(customerId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (customerId === null || customerId === undefined) {
            throw new Error('Required parameter customerId was null or undefined when calling apiV1CustomersGetAllCustomerUsersCustomerIdGet.');
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

        return this.httpClient.request<CustomerAccountsModelListStandardResponse>('get',`${this.basePath}/api/v1/Customers/GetAllCustomerUsers/${encodeURIComponent(String(customerId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Return list of customers
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1CustomersGetAllCustomersPost(body?: StandardGetListRequest, observe?: 'body', reportProgress?: boolean): Observable<GetAllCustomersModelStandardResponse>;
    public apiV1CustomersGetAllCustomersPost(body?: StandardGetListRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetAllCustomersModelStandardResp/**
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

import { AddEditCustomerModel } from '../model/addEditCustomerModel';
import { AddEditCustomerSchoolModel } from '../model/addEditCustomerSchoolModel';
import { AddEditCustomerUsersModel } from '../model/addEditCustomerUsersModel';
import { CustomerAccountsModelListStandardResponse } from '../model/customerAccountsModelListStandardResponse';
import { CustomerAccountsModelStandardResponse } from '../model/customerAccountsModelStandardResponse';
import { GetAllCustomersModelStandardResponse } from '../model/getAllCustomersModelStandardResponse';
import { GetCustomerByIdModelStandardResponse } from '../model/getCustomerByIdModelStandardResponse';
import { GetCustomersSchoolListStandardResponse } from '../model/getCustomersSchoolListStandardResponse';
import { GetCustomersSchoolStandardResponse } from '../model/getCustomersSchoolStandardResponse';
import { Int64StandardResponse } from '../model/int64StandardResponse';
import { StandardGetListRequest } from '../model/standardGetListRequest';
import { StringListStandardResponse } from '../model/stringListStandardResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class CustomersService {

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
     * Add customer
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1CustomersAddCustomerPost(body?: AddEditCustomerModel, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1CustomersAddCustomerPost(body?: AddEditCustomerModel, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiV1CustomersAddCustomerPost(body?: AddEditCustomerModel, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1CustomersAddCustomerPost(body?: AddEditCustomerModel, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<any>('post',`${this.basePath}/api/v1/Customers/AddCustomer`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Add school
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1CustomersAddCustomerSchoolsPost(body?: AddEditCustomerSchoolModel, observe?: 'body', reportProgress?: boolean): Observable<Int64StandardResponse>;
    public apiV1CustomersAddCustomerSchoolsPost(body?: AddEditCustomerSchoolModel, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Int64StandardResponse>>;
    public apiV1CustomersAddCustomerSchoolsPost(body?: AddEditCustomerSchoolModel, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Int64StandardResponse>>;
    public apiV1CustomersAddCustomerSchoolsPost(body?: AddEditCustomerSchoolModel, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<Int64StandardResponse>('post',`${this.basePath}/api/v1/Customers/AddCustomerSchools`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Add customers users
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1CustomersAddCustomerUsersPost(body?: AddEditCustomerUsersModel, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1CustomersAddCustomerUsersPost(body?: AddEditCustomerUsersModel, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiV1CustomersAddCustomerUsersPost(body?: AddEditCustomerUsersModel, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1CustomersAddCustomerUsersPost(body?: AddEditCustomerUsersModel, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<any>('post',`${this.basePath}/api/v1/Customers/AddCustomerUsers`,
            {
                body: body,
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
     * @param customerId 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1CustomersAddListOfSchoolsForCustomerCustomerIdPost(customerId: number, body?: Array<number>, observe?: 'body', reportProgress?: boolean): Observable<Int64StandardResponse>;
    public apiV1CustomersAddListOfSchoolsForCustomerCustomerIdPost(customerId: number, body?: Array<number>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Int64StandardResponse>>;
    public apiV1CustomersAddListOfSchoolsForCustomerCustomerIdPost(customerId: number, body?: Array<number>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Int64StandardResponse>>;
    public apiV1CustomersAddListOfSchoolsForCustomerCustomerIdPost(customerId: number, body?: Array<number>, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (customerId === null || customerId === undefined) {
            throw new Error('Required parameter customerId was null or undefined when calling apiV1CustomersAddListOfSchoolsForCustomerCustomerIdPost.');
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
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<Int64StandardResponse>('post',`${this.basePath}/api/v1/Customers/AddListOfSchoolsForCustomer/${encodeURIComponent(String(customerId))}`,
            {
                body: body,
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
     * @param districtId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1CustomersDeleteCustomerSchoolsSchoolIdDistrictIdDelete(schoolId: number, districtId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1CustomersDeleteCustomerSchoolsSchoolIdDistrictIdDelete(schoolId: number, districtId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiV1CustomersDeleteCustomerSchoolsSchoolIdDistrictIdDelete(schoolId: number, districtId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1CustomersDeleteCustomerSchoolsSchoolIdDistrictIdDelete(schoolId: number, districtId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (schoolId === null || schoolId === undefined) {
            throw new Error('Required parameter schoolId was null or undefined when calling apiV1CustomersDeleteCustomerSchoolsSchoolIdDistrictIdDelete.');
        }

        if (districtId === null || districtId === undefined) {
            throw new Error('Required parameter districtId was null or undefined when calling apiV1CustomersDeleteCustomerSchoolsSchoolIdDistrictIdDelete.');
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

        return this.httpClient.request<any>('delete',`${this.basePath}/api/v1/Customers/DeleteCustomerSchools/${encodeURIComponent(String(schoolId))}/${encodeURIComponent(String(districtId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Delete  customers users
     * 
     * @param accountId the Account identifire.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1CustomersDeleteCustomerUsersAccountIdDelete(accountId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1CustomersDeleteCustomerUsersAccountIdDelete(accountId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiV1CustomersDeleteCustomerUsersAccountIdDelete(accountId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1CustomersDeleteCustomerUsersAccountIdDelete(accountId: number, observe: anyonse>>;
    public apiV1CustomersGetAllCustomersPost(body?: StandardGetListRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetAllCustomersModelStandardResponse>>;
    public apiV1CustomersGetAllCustomersPost(body?: StandardGetListRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<GetAllCustomersModelStandardResponse>('post',`${this.basePath}/api/v1/Customers/GetAllCustomers`,
            {
                body: body,
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
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1CustomersGetAllDistrictsByLocationIdsPost(body?: Array<number>, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1CustomersGetAllDistrictsByLocationIdsPost(body?: Array<number>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiV1CustomersGetAllDistrictsByLocationIdsPost(body?: Array<number>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1CustomersGetAllDistrictsByLocationIdsPost(body?: Array<number>, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<any>('post',`${this.basePath}/api/v1/Customers/GetAllDistrictsByLocationIds`,
            {
                body: body,
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
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1CustomersGetAllSchoolsByDistrictIdsPost(body?: Array<number>, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1CustomersGetAllSchoolsByDistrictIdsPost(body?: Array<number>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiV1CustomersGetAllSchoolsByDistrictIdsPost(body?: Array<number>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1CustomersGetAllSchoolsByDistrictIdsPost(body?: Array<number>, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<any>('post',`${this.basePath}/api/v1/Customers/GetAllSchoolsByDistrictIds`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Return customers School data by id
     * 
     * @param schoolId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1CustomersGetCustomerSchoolsByIdSchoolIdGet(schoolId: number, observe?: 'body', reportProgress?: boolean): Observable<GetCustomersSchoolStandardResponse>;
    public apiV1CustomersGetCustomerSchoolsByIdSchoolIdGet(schoolId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetCustomersSchoolStandardResponse>>;
    public apiV1CustomersGetCustomerSchoolsByIdSchoolIdGet(schoolId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetCustomersSchoolStandardResponse>>;
    public apiV1CustomersGetCustomerSchoolsByIdSchoolIdGet(schoolId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (schoolId === null || schoolId === undefined) {
            throw new Error('Required parameter schoolId was null or undefined when calling apiV1CustomersGetCustomerSchoolsByIdSchoolIdGet.');
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

        return this.httpClient.request<GetCustomersSchoolStandardResponse>('get',`${this.basePath}/api/v1/Customers/GetCustomerSchoolsById/${encodeURIComponent(String(schoolId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Return customer data by id
     * 
     * @param customerId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1CustomersGetCustomersByIdCustomerIdGet(customerId: number, observe?: 'body', reportProgress?: boolean): Observable<GetCustomerByIdModelStandardResponse>;
    public apiV1CustomersGetCustomersByIdCustomerIdGet(customerId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetCustomerByIdModelStandardResponse>>;
    public apiV1CustomersGetCustomersByIdCustomerIdGet(customerId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetCustomerByIdModelStandardResponse>>;
    public apiV1CustomersGetCustomersByIdCustomerIdGet(customerId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (customerId === null || customerId === undefined) {
            throw new Error('Required parameter customerId was null or undefined when calling apiV1CustomersGetCustomersByIdCustomerIdGet.');
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

        return this.httpClient.request<GetCustomerByIdModelStandardResponse>('get',`${this.basePath}/api/v1/Customers/GetCustomersById/${encodeURIComponent(String(customerId))}`,
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
     * @param accountId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1CustomersResetCustomerAccountPasswordAccountIdPatch(accountId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1CustomersResetCustomerAccountPasswordAccountIdPatch(accountId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiV1CustomersResetCustomerAccountPasswordAccountIdPatch(accountId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1CustomersResetCustomerAccountPasswordAccountIdPatch(accountId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (accountId === null || accountId === undefined) {
            throw new Error('Required parameter accountId was null or undefined when calling apiV1CustomersResetCustomerAccountPasswordAccountIdPatch.');
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

        return this.httpClient.request<any>('patch',`${this.basePath}/api/v1/Customers/ResetCustomerAccountPassword/${encodeURIComponent(String(accountId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update status for customers
     * 
     * @param id the identifire.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1CustomersUpdateStatusCustomersIdDelete(id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1CustomersUpdateStatusCustomersIdDelete(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiV1CustomersUpdateStatusCustomersIdDelete(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1CustomersUpdateStatusCustomersIdDelete(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling apiV1CustomersUpdateStatusCustomersIdDelete.');
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

        return this.httpClient.request<any>('delete',`${this.basePath}/api/v1/Customers/UpdateStatusCustomers/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
