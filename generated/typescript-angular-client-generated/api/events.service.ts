sponse<any>>;
    public apiV1EventGetEventByIdEventIdGet(eventId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1EventGetEventByIdEventIdGet(eventId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (eventId === null || eventId === undefined) {
            throw new Error('Required parameter eventId was null or undefined when calling apiV1EventGetEventByIdEventIdGet.');
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

        return this.httpClient.request<any>('get',`${this.basePath}/api/v1/Event/GetEventById/${encodeURIComponent(String(eventId))}`,
            {
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

import { CreateUpdateEventModel } from '../model/createUpdateEventModel';
import { GetAllEventRequest } from '../model/getAllEventRequest';
import { StringListStandardResponse } from '../model/stringListStandardResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class EventsService {

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
    public apiV1EventAddEventPost(body?: CreateUpdateEventModel, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1EventAddEventPost(body?: CreateUpdateEventModel, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiV1EventAddEventPost(body?: CreateUpdateEventModel, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1EventAddEventPost(body?: CreateUpdateEventModel, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.request<any>('post',`${this.basePath}/api/v1/Event/AddEvent`,
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
     * @param eventId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1EventDeleteEventEventIdDelete(eventId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1EventDeleteEventEventIdDelete(eventId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiV1EventDeleteEventEventIdDelete(eventId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1EventDeleteEventEventIdDelete(eventId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (eventId === null || eventId === undefined) {
            throw new Error('Required parameter eventId was null or undefined when calling apiV1EventDeleteEventEventIdDelete.');
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

        return this.httpClient.request<any>('delete',`${this.basePath}/api/v1/Event/DeleteEvent/${encodeURIComponent(String(eventId))}`,
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
     * @param eventId 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1EventEditEventEventIdPut(eventId: number, body?: CreateUpdateEventModel, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1EventEditEventEventIdPut(eventId: number, body?: CreateUpdateEventModel, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiV1EventEditEventEventIdPut(eventId: number, body?: CreateUpdateEventModel, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1EventEditEventEventIdPut(eventId: number, body?: CreateUpdateEventModel, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (eventId === null || eventId === undefined) {
            throw new Error('Required parameter eventId was null or undefined when calling apiV1EventEditEventEventIdPut.');
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

        return this.httpClient.request<any>('put',`${this.basePath}/api/v1/Event/EditEvent/${encodeURIComponent(String(eventId))}`,
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
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1EventGetAllEventsDashboardByCustomerIdCustomerIdGet(customerId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1EventGetAllEventsDashboardByCustomerIdCustomerIdGet(customerId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiV1EventGetAllEventsDashboardByCustomerIdCustomerIdGet(customerId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1EventGetAllEventsDashboardByCustomerIdCustomerIdGet(customerId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (customerId === null || customerId === undefined) {
            throw new Error('Required parameter customerId was null or undefined when calling apiV1EventGetAllEventsDashboardByCustomerIdCustomerIdGet.');
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

        return this.httpClient.request<any>('get',`${this.basePath}/api/v1/Event/GetAllEventsDashboardByCustomerId/${encodeURIComponent(String(customerId))}`,
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
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1EventGetAllEventsDashboardLocationIdGet(locationId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1EventGetAllEventsDashboardLocationIdGet(locationId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiV1EventGetAllEventsDashboardLocationIdGet(locationId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1EventGetAllEventsDashboardLocationIdGet(locationId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling apiV1EventGetAllEventsDashboardLocationIdGet.');
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

        return this.httpClient.request<any>('get',`${this.basePath}/api/v1/Event/GetAllEventsDashboard/${encodeURIComponent(String(locationId))}`,
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
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1EventGetAllEventsPost(body?: GetAllEventRequest, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1EventGetAllEventsPost(body?: GetAllEventRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiV1EventGetAllEventsPost(body?: GetAllEventRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1EventGetAllEventsPost(body?: GetAllEventRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.request<any>('post',`${this.basePath}/api/v1/Event/GetAllEvents`,
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
     * @param eventId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1EventGetEventByIdEventIdGet(eventId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1EventGetEventByIdEventIdGet(eventId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpRe