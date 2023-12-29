 httpContentTypeSelected);
        }

        return this.httpClient.request<any>('post',`${this.basePath}/api/v1/Contact/LinkContactsWithCustomer`,
            {
                body: body,
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
     * @param customerId 
     * @param contactId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1ContactUnLinkContactsWithCustomerPut(customerId?: number, contactId?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1ContactUnLinkContactsWithCustomerPut(customerId?: number, contactId?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiV1ContactUnLinkContactsWithCustomerPut(customerId?: number, contactId?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1ContactUnLinkContactsWithCustomerPut(customerId?: number, contactId?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (customerId !== undefined && customerId !== null) {
            queryParameters = queryParameters.set('customerId', <any>customerId);
        }
        if (contactId !== undefined && contactId !== null) {
            queryParameters = queryParameters.set('contactId', <any>contactId);
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

        return this.httpClient.request<any>('put',`${this.basePath}/api/v1/Contact/UnLinkContactsWithCustomer`,
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
     * @param contactId 
     * @param isActive 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1ContactUpdateContactStatusContactIdPatch(contactId: number, isActive?: boolean, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1ContactUpdateContactStatusContactIdPatch(contactId: number, isActive?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiV1ContactUpdateContactStatusContactIdPatch(contactId: number, isActive?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1ContactUpdateContactStatusContactIdPatch(contactId: number, isActive?: boolean, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (contactId === null || contactId === undefined) {
            throw new Error('Required parameter contactId was null or undefined when calling apiV1ContactUpdateContactStatusContactIdPatch.');
        }


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (isActive !== undefined && isActive !== null) {
            queryParameters = queryParameters.set('isActive', <any>isActive);
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

        return this.httpClient.request<any>('patch',`${this.basePath}/api/v1/Contact/UpdateContactStatus/${encodeURIComponent(String(contactId))}`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
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
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { CreateUpdateContactModel } from '../model/createUpdateContactModel';
import { StandardGetListRequest } from '../model/standardGetListRequest';
import { StringListStandardResponse } from '../model/stringListStandardResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ContactService {

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
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1ContactAddContactPost(body?: CreateUpdateContactModel, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1ContactAddContactPost(body?: CreateUpdateContactModel, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiV1ContactAddContactPost(body?: CreateUpdateContactModel, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1ContactAddContactPost(body?: CreateUpdateContactModel, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.request<any>('post',`${this.basePath}/api/v1/Contact/AddContact`,
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
     * @param contactId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1ContactDeleteContactDelete(contactId?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1ContactDeleteContactDelete(contactId?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiV1ContactDeleteContactDelete(contactId?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1ContactDeleteContactDelete(contactId?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (contactId !== undefined && contactId !== null) {
            queryParameters = queryParameters.set('contactId', <any>contactId);
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

        return this.httpClient.request<any>('delete',`${this.basePath}/api/v1/Contact/DeleteContact`,
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
     * @param contactId 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1ContactEditContactContactIdPut(contactId: number, body?: CreateUpdateContactModel, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1ContactEditContactContactIdPut(contactId: number, body?: CreateUpdateContactModel, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiV1ContactEditContactContactIdPut(contactId: number, body?: CreateUpdateContactModel, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1ContactEditContactContactIdPut(contactId: number, body?: CreateUpdateContactModel, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (contactId === null || contactId === undefined) {
            throw new Error('Required parameter contactId was null or undefined when calling apiV1ContactEditContactContactIdPut.');
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

        return this.httpClient.request<any>('put',`${this.basePath}/api/v1/Contact/EditContact/${encodeURIComponent(String(contactId))}`,
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
     * @param isActive 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1ContactGetAllContactsPost(body?: StandardGetListRequest, isActive?: boolean, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1ContactGetAllContactsPost(body?: StandardGetListRequest, isActive?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiV1ContactGetAllContactsPost(body?: StandardGetListRequest, isActive?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1ContactGetAllContactsPost(body?: StandardGetListRequest, isActive?: boolean, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (isActive !== undefined && isActive !== null) {
            queryParameters = queryParameters.set('isActive', <any>isActive);
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

        return this.httpClient.request<any>('post',`${this.basePath}/api/v1/Contact/GetAllContacts`,
            {
                body: body,
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
     * @param contactId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1ContactGetContactByIdContactIdGet(contactId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1ContactGetContactByIdContactIdGet(contactId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiV1ContactGetContactByIdContactIdGet(contactId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1ContactGetContactByIdContactIdGet(contactId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (contactId === null || contactId === undefined) {
            throw new Error('Required parameter contactId was null or undefined when calling apiV1ContactGetContactByIdContactIdGet.');
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

        return this.httpClient.request<any>('get',`${this.basePath}/api/v1/Contact/GetContactById/${encodeURIComponent(String(contactId))}`,
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
     * @param body 
     * @param customerId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1ContactLinkContactsWithCustomerPost(body?: Array<number>, customerId?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1ContactLinkContactsWithCustomerPost(body?: Array<number>, customerId?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiV1ContactLinkContactsWithCustomerPost(body?: Array<number>, customerId?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1ContactLinkContactsWithCustomerPost(body?: Array<number>, customerId?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (customerId !== undefined && customerId !== null) {
            queryParameters = queryParameters.set('customerId', <any>customerId);
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
            headers = headers.set('Content-Type',