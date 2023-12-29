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

        return this.httpClient.request<any>('get',`${this.basePath}/api/v1/IncidentReport/GetAllIncidentReportNotes`,
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
     * Return all incedent reports
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1IncidentReportGetAllIncidentReportPost(body?: StandardGetListRequest, observe?: 'body', reportProgress?: boolean): Observable<GetAllIncidentReportModelStandardResponse>;
    public apiV1IncidentReportGetAllIncidentReportPost(body?: StandardGetListRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetAllIncidentReportModelStandardResponse>>;
    public apiV1IncidentReportGetAllIncidentReportPost(body?: StandardGetListRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetAllIncidentReportModelStandardResponse>>;
    public apiV1IncidentReportGetAllIncidentReportPost(body?: StandardGetListRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.request<GetAllIncidentReportModelStandardResponse>('post',`${this.basePath}/api/v1/IncidentReport/GetAllIncidentReport`,
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
     * Return incedent report
     * 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1IncidentReportGetIncidentReportByIdIdGet(id: number, observe?: 'body', reportProgress?: boolean): Observable<IncidentReportModelStandardResponse>;
    public apiV1IncidentReportGetIncidentReportByIdIdGet(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<IncidentReportModelStandardResponse>>;
    public apiV1IncidentReportGetIncidentReportByIdIdGet(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<IncidentReportModelStandardResponse>>;
    public apiV1IncidentReportGetIncidentReportByIdIdGet(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling apiV1IncidentReportGetIncidentReportByIdIdGet.');
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

        return this.httpClient.request<IncidentReportModelStandardResponse>('get',`${this.basePath}/api/v1/IncidentReport/GetIncidentReportById/${encodeURIComponent(String(id))}`,
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
     * @param incidentReportId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1IncidentReportGetIncidentReportInfoIncidentReportIdGet(incidentReportId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1IncidentReportGetIncidentReportInfoIncidentReportIdGet(incidentReportId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiV1IncidentReportGetIncidentReportInfoIncidentReportIdGet(incidentReportId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1IncidentReportGetIncidentReportInfoIncidentReportIdGet(incidentReportId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (incidentReportId === null || incidentReportId === undefined) {
            throw new Error('Required parameter incidentReportId was null or undefined when calling apiV1IncidentReportGetIncidentReportInfoIncidentReportIdGet.');
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

        return this.httpClient.request<any>('get',`${this.basePath}/api/v1/IncidentReport/GetIncidentReportInfo/${encodeURIComponent(String(incidentReportId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update status for incident requests
     * 
     * @param id the identifire.
     * @param type The type of action accept only Delete or Activate or Attention.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1IncidentReportUpdateStatusIncidentReportIdTypeDelete(id: number, type: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1IncidentReportUpdateStatusIncidentReportIdTypeDelete(id: number, type: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiV1IncidentReportUpdateStatusIncidentReportIdTypeDelete(id: number, type: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1IncidentReportUpdateStatusIncidentReportIdTypeDelete(id: number, type: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling apiV1IncidentReportUpdateStatusIncidentReportIdTypeDelete.');
        }

        if (type === null || type === undefined) {
            throw new Error('Required parameter type was null or undefined when calling apiV1IncidentReportUpdateStatusIncidentReportIdTypeDelete.');
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

        return this.httpClient.request<any>('delete',`${this.basePath}/api/v1/IncidentReport/UpdateStatusIncidentReport/${encodeURIComponent(String(id))}/${encodeURIComponent(String(type))}`,
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

import { AddEditIncidentReportModel } from '../model/addEditIncidentReportModel';
import { AddNoteModel } from '../model/addNoteModel';
import { GetAllIncidentReportModelStandardResponse } from '../model/getAllIncidentReportModelStandardResponse';
import { IncidentReportModelStandardResponse } from '../model/incidentReportModelStandardResponse';
import { StandardGetListRequest } from '../model/standardGetListRequest';
import { StringListStandardResponse } from '../model/stringListStandardResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class IncidentReportService {

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
    public apiV1IncidentReportAddIncidentReportNotePost(body?: AddNoteModel, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1IncidentReportAddIncidentReportNotePost(body?: AddNoteModel, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiV1IncidentReportAddIncidentReportNotePost(body?: AddNoteModel, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1IncidentReportAddIncidentReportNotePost(body?: AddNoteModel, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.request<any>('post',`${this.basePath}/api/v1/IncidentReport/AddIncidentReportNote`,
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
    public apiV1IncidentReportAddIncidentReportPost(body?: AddEditIncidentReportModel, observe?: 'body', reportProgress?: boolean): Observable<StringListStandardResponse>;
    public apiV1IncidentReportAddIncidentReportPost(body?: AddEditIncidentReportModel, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<StringListStandardResponse>>;
    public apiV1IncidentReportAddIncidentReportPost(body?: AddEditIncidentReportModel, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<StringListStandardResponse>>;
    public apiV1IncidentReportAddIncidentReportPost(body?: AddEditIncidentReportModel, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.request<StringListStandardResponse>('post',`${this.basePath}/api/v1/IncidentReport/AddIncidentReport`,
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
     * Edit incedent report
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1IncidentReportEditIncidentReportPut(body?: AddEditIncidentReportModel, observe?: 'body', reportProgress?: boolean): Observable<StringListStandardResponse>;
    public apiV1IncidentReportEditIncidentReportPut(body?: AddEditIncidentReportModel, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<StringListStandardResponse>>;
    public apiV1IncidentReportEditIncidentReportPut(body?: AddEditIncidentReportModel, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<StringListStandardResponse>>;
    public apiV1IncidentReportEditIncidentReportPut(body?: AddEditIncidentReportModel, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.request<StringListStandardResponse>('put',`${this.basePath}/api/v1/IncidentReport/EditIncidentReport`,
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
     * @param incidentReportId 
     * @param timeZoneText 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1IncidentReportGetAllIncidentReportActivityLogGet(incidentReportId?: number, timeZoneText?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1IncidentReportGetAllIncidentReportActivityLogGet(incidentReportId?: number, timeZoneText?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiV1IncidentReportGetAllIncidentReportActivityLogGet(incidentReportId?: number, timeZoneText?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1IncidentReportGetAllIncidentReportActivityLogGet(incidentReportId?: number, timeZoneText?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (incidentReportId !== undefined && incidentReportId !== null) {
            queryParameters = queryParameters.set('incidentReportId', <any>incidentReportId);
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

        return this.httpClient.request<any>('get',`${this.basePath}/api/v1/IncidentReport/GetAllIncidentReportActivityLog`,
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
     * Return all incedent reports by customer id
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1IncidentReportGetAllIncidentReportByCustomerIdPost(body?: StandardGetListRequest, observe?: 'body', reportProgress?: boolean): Observable<GetAllIncidentReportModelStandardResponse>;
    public apiV1IncidentReportGetAllIncidentReportByCustomerIdPost(body?: StandardGetListRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetAllIncidentReportModelStandardResponse>>;
    public apiV1IncidentReportGetAllIncidentReportByCustomerIdPost(body?: StandardGetListRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetAllIncidentReportModelStandardResponse>>;
    public apiV1IncidentReportGetAllIncidentReportByCustomerIdPost(body?: StandardGetListRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.request<GetAllIncidentReportModelStandardResponse>('post',`${this.basePath}/api/v1/IncidentReport/GetAllIncidentReportByCustomerId`,
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
     * @param incidentReportId 
     * @param timeZoneText 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1IncidentReportGetAllIncidentReportNotesGet(incidentReportId?: number, timeZoneText?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1IncidentReportGetAllIncidentReportNotesGet(incidentReportId?: number, timeZoneText?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiV1IncidentReportGetAllIncidentReportNotesGet(incidentReportId?: number, timeZoneText?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1IncidentReportGetAllIncidentReportNotesGet(incidentReportId?: number, timeZoneText?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (incidentReportId !== undefined && incidentReportId !== null) {
            queryParameters = queryParameters.set('incidentReportId', <any>incidentReportId);
        }
        if (timeZoneText !== undefined && timeZoneText !== null) {
            queryParameters = queryParameters.set('timeZoneText', <any>timeZoneText);
        }

  