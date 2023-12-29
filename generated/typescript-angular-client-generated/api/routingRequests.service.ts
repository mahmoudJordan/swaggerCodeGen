ityLogGet(routingRequestId?: number, timeZoneText?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1RoutingRequestsGetAllRoutingRequestActivityLogGet(routingRequestId?: number, timeZoneText?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (routingRequestId !== undefined && routingRequestId !== null) {
            queryParameters = queryParameters.set('routingRequestId', <any>routingRequestId);
        }
        if (timeZoneText !== undefined && timeZoneText !== null) {
            queryParameters = queryParameters.set('timeZoneText', <any>timeZoneText);
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

        return this.httpClient.request<any>('get',`${this.basePath}/api/v1/RoutingRequests/GetAllRoutingRequestActivityLog`,
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
     * @param routingRequestId 
     * @param timeZoneText 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1RoutingRequestsGetAllRoutingRequestNotesGet(routingRequestId?: number, timeZoneText?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1RoutingRequestsGetAllRoutingRequestNotesGet(routingRequestId?: number, timeZoneText?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiV1RoutingRequestsGetAllRoutingRequestNotesGet(routingRequestId?: number, timeZoneText?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1RoutingRequestsGetAllRoutingRequestNotesGet(routingRequestId?: number, timeZoneText?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (routingRequestId !== undefined && routingRequestId !== null) {
            queryParameters = queryParameters.set('routingRequestId', <any>routingRequestId);
        }
        if (timeZoneText !== undefined && timeZoneText !== null) {
            queryParameters = queryParameters.set('timeZoneText', <any>timeZoneText);
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

        return this.httpClient.request<any>('get',`${this.basePath}/api/v1/RoutingRequests/GetAllRoutingRequestNotes`,
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
     * Return all routing requests
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1RoutingRequestsGetAllRoutingRequestsByCustomerPost(body?: StandardGetListRequest, observe?: 'body', reportProgress?: boolean): Observable<GetAllRoutingRequestsModelStandardResponse>;
    public apiV1RoutingRequestsGetAllRoutingRequestsByCustomerPost(body?: StandardGetListRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetAllRoutingRequestsModelStandardResponse>>;
    public apiV1RoutingRequestsGetAllRoutingRequestsByCustomerPost(body?: StandardGetListRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetAllRoutingRequestsModelStandardResponse>>;
    public apiV1RoutingRequestsGetAllRoutingRequestsByCustomerPost(body?: StandardGetListRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.request<GetAllRoutingRequestsModelStandardResponse>('post',`${this.basePath}/api/v1/RoutingRequests/GetAllRoutingRequestsByCustomer`,
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
     * Return all routing requests
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1RoutingRequestsGetAllRoutingRequestsPost(body?: StandardGetListRequest, observe?: 'body', reportProgress?: boolean): Observable<GetAllRoutingRequestsModelStandardResponse>;
    public apiV1RoutingRequestsGetAllRoutingRequestsPost(body?: StandardGetListRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetAllRoutingRequestsModelStandardResponse>>;
    public apiV1RoutingRequestsGetAllRoutingRequestsPost(body?: StandardGetListRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetAllRoutingRequestsModelStandardResponse>>;
    public apiV1RoutingRequestsGetAllRoutingRequestsPost(body?: StandardGetListRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.request<GetAllRoutingRequestsModelStandardResponse>('post',`${this.basePath}/api/v1/RoutingRequests/GetAllRoutingRequests`,
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
     * @param id 
     * @param type 
     * @param status 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1RoutingRequestsUpdateStatusRoutingRequestsIdTypePatch(id: number, type: string, status?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1RoutingRequestsUpdateStatusRoutingRequestsIdTypePatch(id: number, type: string, status?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiV1RoutingRequestsUpdateStatusRoutingRequestsIdTypePatch(id: number, type: string, status?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1RoutingRequestsUpdateStatusRoutingRequestsIdTypePatch(id: number, type: string, status?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling apiV1RoutingRequestsUpdateStatusRoutingRequestsIdTypePatch.');
        }

        if (type === null || type === undefined) {
            throw new Error('Required parameter type was null or undefined when calling apiV1RoutingRequestsUpdateStatusRoutingRequestsIdTypePatch.');
        }


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (status !== undefined && status !== null) {
            queryParameters = queryParameters.set('status', <any>status);
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

        return this.httpClient.request<any>('patch',`${this.basePath}/api/v1/RoutingRequests/UpdateStatusRoutingRequests/${encodeURIComponent(String(id))}/${encodeURIComponent(String(type))}`,
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

import { AddEditRoutingRequestsModel } from '../model/addEditRoutingRequestsModel';
import { AddNoteModel } from '../model/addNoteModel';
import { GetAllRoutingRequestsModelStandardResponse } from '../model/getAllRoutingRequestsModelStandardResponse';
import { StandardGetListRequest } from '../model/standardGetListRequest';
import { StringListStandardResponse } from '../model/stringListStandardResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class RoutingRequestsService {

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
    public apiV1RoutingRequestsAddRoutingRequestNotePost(body?: AddNoteModel, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1RoutingRequestsAddRoutingRequestNotePost(body?: AddNoteModel, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiV1RoutingRequestsAddRoutingRequestNotePost(body?: AddNoteModel, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1RoutingRequestsAddRoutingRequestNotePost(body?: AddNoteModel, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.request<any>('post',`${this.basePath}/api/v1/RoutingRequests/AddRoutingRequestNote`,
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
     * @param file 
     * @param data 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1RoutingRequestsAddRoutingRequestWithFilePostForm(file?: Array<Blob>, data?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1RoutingRequestsAddRoutingRequestWithFilePostForm(file?: Array<Blob>, data?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiV1RoutingRequestsAddRoutingRequestWithFilePostForm(file?: Array<Blob>, data?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1RoutingRequestsAddRoutingRequestWithFilePostForm(file?: Array<Blob>, data?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



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
            'multipart/form-data'
        ];

        const canConsumeForm = this.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): void; };
        let useForm = false;
        let convertFormParamsToString = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        // see https://stackoverflow.com/questions/4007969/application-x-www-form-urlencoded-or-multipart-form-data
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        }

        if (file) {
            file.forEach((element) => {
                formParams = formParams.append('File', <any>element) as any || formParams;
            })
        }
        if (data !== undefined) {
            formParams = formParams.append('Data', <any>data) as any || formParams;
        }

        return this.httpClient.request<any>('post',`${this.basePath}/api/v1/RoutingRequests/AddRoutingRequestWithFile`,
            {
                body: convertFormParamsToString ? formParams.toString() : formParams,
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
    public apiV1RoutingRequestsAddRoutingRequestsPost(body?: AddEditRoutingRequestsModel, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1RoutingRequestsAddRoutingRequestsPost(body?: AddEditRoutingRequestsModel, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiV1RoutingRequestsAddRoutingRequestsPost(body?: AddEditRoutingRequestsModel, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1RoutingRequestsAddRoutingRequestsPost(body?: AddEditRoutingRequestsModel, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.request<any>('post',`${this.basePath}/api/v1/RoutingRequests/AddRoutingRequests`,
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
    public apiV1RoutingRequestsEditRoutingRequestsPost(body?: AddEditRoutingRequestsModel, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1RoutingRequestsEditRoutingRequestsPost(body?: AddEditRoutingRequestsModel, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiV1RoutingRequestsEditRoutingRequestsPost(body?: AddEditRoutingRequestsModel, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1RoutingRequestsEditRoutingRequestsPost(body?: AddEditRoutingRequestsModel, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.request<any>('post',`${this.basePath}/api/v1/RoutingRequests/EditRoutingRequests`,
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
     * @param file 
     * @param data 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1RoutingRequestsEditRoutingRequestsWithFilePostForm(file?: Array<Blob>, data?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1RoutingRequestsEditRoutingRequestsWithFilePostForm(file?: Array<Blob>, data?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiV1RoutingRequestsEditRoutingRequestsWithFilePostForm(file?: Array<Blob>, data?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1RoutingRequestsEditRoutingRequestsWithFilePostForm(file?: Array<Blob>, data?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



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
            'multipart/form-data'
        ];

        const canConsumeForm = this.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): void; };
        let useForm = false;
        let convertFormParamsToString = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        // see https://stackoverflow.com/questions/4007969/application-x-www-form-urlencoded-or-multipart-form-data
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        }

        if (file) {
            file.forEach((element) => {
                formParams = formParams.append('File', <any>element) as any || formParams;
            })
        }
        if (data !== undefined) {
            formParams = formParams.append('Data', <any>data) as any || formParams;
        }

        return this.httpClient.request<any>('post',`${this.basePath}/api/v1/RoutingRequests/EditRoutingRequestsWithFile`,
            {
                body: convertFormParamsToString ? formParams.toString() : formParams,
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
     * @param routingRequestId 
     * @param timeZoneText 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1RoutingRequestsGetAllRoutingRequestActivityLogGet(routingRequestId?: number, timeZoneText?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1RoutingRequestsGetAllRoutingRequestActivityLogGet(routingRequestId?: number, timeZoneText?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiV1RoutingRequestsGetAllRoutingRequestActiv