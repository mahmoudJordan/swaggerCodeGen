questsGetAllVideoRequestActivityLogGet(videoRequestId?: number, timeZoneText?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1VideoRequestsGetAllVideoRequestActivityLogGet(videoRequestId?: number, timeZoneText?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiV1VideoRequestsGetAllVideoRequestActivityLogGet(videoRequestId?: number, timeZoneText?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1VideoRequestsGetAllVideoRequestActivityLogGet(videoRequestId?: number, timeZoneText?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (videoRequestId !== undefined && videoRequestId !== null) {
            queryParameters = queryParameters.set('videoRequestId', <any>videoRequestId);
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

        return this.httpClient.request<any>('get',`${this.basePath}/api/v1/VideoRequests/GetAllVideoRequestActivityLog`,
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
     * @param videoRequestId 
     * @param timeZoneText 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1VideoRequestsGetAllVideoRequestNotesGet(videoRequestId?: number, timeZoneText?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1VideoRequestsGetAllVideoRequestNotesGet(videoRequestId?: number, timeZoneText?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiV1VideoRequestsGetAllVideoRequestNotesGet(videoRequestId?: number, timeZoneText?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1VideoRequestsGetAllVideoRequestNotesGet(videoRequestId?: number, timeZoneText?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (videoRequestId !== undefined && videoRequestId !== null) {
            queryParameters = queryParameters.set('videoRequestId', <any>videoRequestId);
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

        return this.httpClient.request<any>('get',`${this.basePath}/api/v1/VideoRequests/GetAllVideoRequestNotes`,
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
     * Return all video requests by customer id
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1VideoRequestsGetAllVideoRequestsByCustomerPost(body?: StandardGetListRequest, observe?: 'body', reportProgress?: boolean): Observable<GetAllVideoRequestsModelStandardResponse>;
    public apiV1VideoRequestsGetAllVideoRequestsByCustomerPost(body?: StandardGetListRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetAllVideoRequestsModelStandardResponse>>;
    public apiV1VideoRequestsGetAllVideoRequestsByCustomerPost(body?: StandardGetListRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetAllVideoRequestsModelStandardResponse>>;
    public apiV1VideoRequestsGetAllVideoRequestsByCustomerPost(body?: StandardGetListRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.request<GetAllVideoRequestsModelStandardResponse>('post',`${this.basePath}/api/v1/VideoRequests/GetAllVideoRequestsByCustomer`,
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
     * Return all video requests
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1VideoRequestsGetAllVideoRequestsPost(body?: StandardGetListRequest, observe?: 'body', reportProgress?: boolean): Observable<GetAllVideoRequestsModelStandardResponse>;
    public apiV1VideoRequestsGetAllVideoRequestsPost(body?: StandardGetListRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetAllVideoRequestsModelStandardResponse>>;
    public apiV1VideoRequestsGetAllVideoRequestsPost(body?: StandardGetListRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetAllVideoRequestsModelStandardResponse>>;
    public apiV1VideoRequestsGetAllVideoRequestsPost(body?: StandardGetListRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.request<GetAllVideoRequestsModelStandardResponse>('post',`${this.basePath}/api/v1/VideoRequests/GetAllVideoRequests`,
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
     * @param videoRequestId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1VideoRequestsGetvideoRequestsByIdVideoRequestIdGet(videoRequestId: number, observe?: 'body', reportProgress?: boolean): Observable<GetVideoRequestByIdStandardResponse>;
    public apiV1VideoRequestsGetvideoRequestsByIdVideoRequestIdGet(videoRequestId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetVideoRequestByIdStandardResponse>>;
    public apiV1VideoRequestsGetvideoRequestsByIdVideoRequestIdGet(videoRequestId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetVideoRequestByIdStandardResponse>>;
    public apiV1VideoRequestsGetvideoRequestsByIdVideoRequestIdGet(videoRequestId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (videoRequestId === null || videoRequestId === undefined) {
            throw new Error('Required parameter videoRequestId was null or undefined when calling apiV1VideoRequestsGetvideoRequestsByIdVideoRequestIdGet.');
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

        return this.httpClient.request<GetVideoRequestByIdStandardResponse>('get',`${this.basePath}/api/v1/VideoRequests/GetvideoRequestsById/${encodeURIComponent(String(videoRequestId))}`,
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
    public apiV1VideoRequestsSaveVideosOrdersPost(body?: Array<number>, observe?: 'body', reportProgress?: boolean): Observable<StringListStandardResponse>;
    public apiV1VideoRequestsSaveVideosOrdersPost(body?: Array<number>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<StringListStandardResponse>>;
    public apiV1VideoRequestsSaveVideosOrdersPost(body?: Array<number>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<StringListStandardResponse>>;
    public apiV1VideoRequestsSaveVideosOrdersPost(body?: Array<number>, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.request<StringListStandardResponse>('post',`${this.basePath}/api/v1/VideoRequests/SaveVideosOrders`,
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
     * Update status for video requests
     * 
     * @param id the identifire.
     * @param type The type of action accept only Delete or Activate or Attention or Status.
     * @param status 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1VideoRequestsUpdateStatusVideoRequestsIdTypePatch(id: number, type: string, status?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1VideoRequestsUpdateStatusVideoRequestsIdTypePatch(id: number, type: string, status?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiV1VideoRequestsUpdateStatusVideoRequestsIdTypePatch(id: number, type: string, status?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1VideoRequestsUpdateStatusVideoRequestsIdTypePatch(id: number, type: string, status?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling apiV1VideoRequestsUpdateStatusVideoRequestsIdTypePatch.');
        }

        if (type === null || type === undefined) {
            throw new Error('Required parameter type was null or undefined wh/**
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

import { AddEditVideoRequestsModel } from '../model/addEditVideoRequestsModel';
import { AddNewVideo } from '../model/addNewVideo';
import { AddNoteModel } from '../model/addNoteModel';
import { GetAllVideoRequestsModelStandardResponse } from '../model/getAllVideoRequestsModelStandardResponse';
import { GetVideoRequestByIdStandardResponse } from '../model/getVideoRequestByIdStandardResponse';
import { Int64StandardResponse } from '../model/int64StandardResponse';
import { StandardGetListRequest } from '../model/standardGetListRequest';
import { StringListStandardResponse } from '../model/stringListStandardResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class VideoRequestsService {

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
    public apiV1VideoRequestsAddVideoPost(body?: AddNewVideo, observe?: 'body', reportProgress?: boolean): Observable<Int64StandardResponse>;
    public apiV1VideoRequestsAddVideoPost(body?: AddNewVideo, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Int64StandardResponse>>;
    public apiV1VideoRequestsAddVideoPost(body?: AddNewVideo, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Int64StandardResponse>>;
    public apiV1VideoRequestsAddVideoPost(body?: AddNewVideo, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.request<Int64StandardResponse>('post',`${this.basePath}/api/v1/VideoRequests/AddVideo`,
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
    public apiV1VideoRequestsAddVideoRequestNotePost(body?: AddNoteModel, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1VideoRequestsAddVideoRequestNotePost(body?: AddNoteModel, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiV1VideoRequestsAddVideoRequestNotePost(body?: AddNoteModel, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1VideoRequestsAddVideoRequestNotePost(body?: AddNoteModel, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.request<any>('post',`${this.basePath}/api/v1/VideoRequests/AddVideoRequestNote`,
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
    public apiV1VideoRequestsAddVideoRequestsPost(body?: AddEditVideoRequestsModel, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1VideoRequestsAddVideoRequestsPost(body?: AddEditVideoRequestsModel, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiV1VideoRequestsAddVideoRequestsPost(body?: AddEditVideoRequestsModel, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1VideoRequestsAddVideoRequestsPost(body?: AddEditVideoRequestsModel, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.request<any>('post',`${this.basePath}/api/v1/VideoRequests/AddVideoRequests`,
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
     * @param videoId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1VideoRequestsDeleteVideoVideoIdDelete(videoId: number, observe?: 'body', reportProgress?: boolean): Observable<Int64StandardResponse>;
    public apiV1VideoRequestsDeleteVideoVideoIdDelete(videoId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Int64StandardResponse>>;
    public apiV1VideoRequestsDeleteVideoVideoIdDelete(videoId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Int64StandardResponse>>;
    public apiV1VideoRequestsDeleteVideoVideoIdDelete(videoId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (videoId === null || videoId === undefined) {
            throw new Error('Required parameter videoId was null or undefined when calling apiV1VideoRequestsDeleteVideoVideoIdDelete.');
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

        return this.httpClient.request<Int64StandardResponse>('delete',`${this.basePath}/api/v1/VideoRequests/DeleteVideo/${encodeURIComponent(String(videoId))}`,
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
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1VideoRequestsDeleteVideosFromFireBaseDelete(observe?: 'body', reportProgress?: boolean): Observable<Int64StandardResponse>;
    public apiV1VideoRequestsDeleteVideosFromFireBaseDelete(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Int64StandardResponse>>;
    public apiV1VideoRequestsDeleteVideosFromFireBaseDelete(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Int64StandardResponse>>;
    public apiV1VideoRequestsDeleteVideosFromFireBaseDelete(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.request<Int64StandardResponse>('delete',`${this.basePath}/api/v1/VideoRequests/DeleteVideosFromFireBase`,
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
    public apiV1VideoRequestsEditVideoRequestPut(body?: AddEditVideoRequestsModel, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1VideoRequestsEditVideoRequestPut(body?: AddEditVideoRequestsModel, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiV1VideoRequestsEditVideoRequestPut(body?: AddEditVideoRequestsModel, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1VideoRequestsEditVideoRequestPut(body?: AddEditVideoRequestsModel, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.request<any>('put',`${this.basePath}/api/v1/VideoRequests/EditVideoRequest`,
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
     * @param videoRequestId 
     * @param timeZoneText 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1VideoReen calling apiV1VideoRequestsUpdateStatusVideoRequestsIdTypePatch.');
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

        return this.httpClient.request<any>('patch',`${this.basePath}/api/v1/VideoRequests/UpdateStatusVideoRequests/${encodeURIComponent(String(id))}/${encodeURIComponent(String(type))}`,
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
