IdModelStandardResponse>('get',`${this.basePath}/api/v1/RegionsLocations/GetRegionsById/${encodeURIComponent(String(regionId))}`,
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
    public apiV1RegionsLocationsSyncLocationsAndRegionsWithWorkdayGet(observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1RegionsLocationsSyncLocationsAndRegionsWithWorkdayGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiV1RegionsLocationsSyncLocationsAndRegionsWithWorkdayGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1RegionsLocationsSyncLocationsAndRegionsWithWorkdayGet(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<any>('get',`${this.basePath}/api/v1/RegionsLocations/SyncLocationsAndRegionsWithWorkday`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update status for regions
     * 
     * @param id the account identifire.
     * @param type The type of action accept only Delete or Activate.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1RegionsLocationsUpdateRegionsStatusIdTypeDelete(id: number, type: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1RegionsLocationsUpdateRegionsStatusIdTypeDelete(id: number, type: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiV1RegionsLocationsUpdateRegionsStatusIdTypeDelete(id: number, type: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1RegionsLocationsUpdateRegionsStatusIdTypeDelete(id: number, type: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling apiV1RegionsLocationsUpdateRegionsStatusIdTypeDelete.');
        }

        if (type === null || type === undefined) {
            throw new Error('Required parameter type was null or undefined when calling apiV1RegionsLocationsUpdateRegionsStatusIdTypeDelete.');
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

        return this.httpClient.request<any>('delete',`${this.basePath}/api/v1/RegionsLocations/UpdateRegionsStatus/${encodeURIComponent(String(id))}/${encodeURIComponent(String(type))}`,
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

import { BooleanStandardResponse } from '../model/booleanStandardResponse';
import { GetAllRegionsLocationsListModelStandardResponse } from '../model/getAllRegionsLocationsListModelStandardResponse';
import { GetRegionByIdModelStandardResponse } from '../model/getRegionByIdModelStandardResponse';
import { ResultsStandardResponse } from '../model/resultsStandardResponse';
import { StandardGetListRequest } from '../model/standardGetListRequest';
import { StringListStandardResponse } from '../model/stringListStandardResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class RegionsLocationsService {

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
     * Add regions
     * 
     * @param name 
     * @param image 
     * @param locations 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1RegionsLocationsAddRegionsPostForm(name?: string, image?: Array<Blob>, locations?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1RegionsLocationsAddRegionsPostForm(name?: string, image?: Array<Blob>, locations?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiV1RegionsLocationsAddRegionsPostForm(name?: string, image?: Array<Blob>, locations?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1RegionsLocationsAddRegionsPostForm(name?: string, image?: Array<Blob>, locations?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {




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

        if (name !== undefined) {
            formParams = formParams.append('name', <any>name) as any || formParams;
        }
        if (image) {
            image.forEach((element) => {
                formParams = formParams.append('Image', <any>element) as any || formParams;
            })
        }
        if (locations !== undefined) {
            formParams = formParams.append('Locations', <any>locations) as any || formParams;
        }

        return this.httpClient.request<any>('post',`${this.basePath}/api/v1/RegionsLocations/AddRegions`,
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
     * check if location exist
     * 
     * @param name 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1RegionsLocationsCheckLocationExistsNameGet(name: string, id?: number, observe?: 'body', reportProgress?: boolean): Observable<BooleanStandardResponse>;
    public apiV1RegionsLocationsCheckLocationExistsNameGet(name: string, id?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<BooleanStandardResponse>>;
    public apiV1RegionsLocationsCheckLocationExistsNameGet(name: string, id?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<BooleanStandardResponse>>;
    public apiV1RegionsLocationsCheckLocationExistsNameGet(name: string, id?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling apiV1RegionsLocationsCheckLocationExistsNameGet.');
        }


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.set('Id', <any>id);
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

        return this.httpClient.request<BooleanStandardResponse>('get',`${this.basePath}/api/v1/RegionsLocations/CheckLocationExists/${encodeURIComponent(String(name))}`,
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
     * @param id 
     * @param name 
     * @param image 
     * @param locations 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1RegionsLocationsEditRegionsPutForm(id?: number, name?: string, image?: Array<Blob>, locations?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiV1RegionsLocationsEditRegionsPutForm(id?: number, name?: string, image?: Array<Blob>, locations?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiV1RegionsLocationsEditRegionsPutForm(id?: number, name?: string, image?: Array<Blob>, locations?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiV1RegionsLocationsEditRegionsPutForm(id?: number, name?: string, image?: Array<Blob>, locations?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {





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

        if (id !== undefined) {
            formParams = formParams.append('Id', <any>id) as any || formParams;
        }
        if (name !== undefined) {
            formParams = formParams.append('name', <any>name) as any || formParams;
        }
        if (image) {
            image.forEach((element) => {
                formParams = formParams.append('Image', <any>element) as any || formParams;
            })
        }
        if (locations !== undefined) {
            formParams = formParams.append('Locations', <any>locations) as any || formParams;
        }

        return this.httpClient.request<any>('put',`${this.basePath}/api/v1/RegionsLocations/EditRegions`,
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
     * Return all regions locations
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1RegionsLocationsGetAllRegionsPost(body?: StandardGetListRequest, observe?: 'body', reportProgress?: boolean): Observable<GetAllRegionsLocationsListModelStandardResponse>;
    public apiV1RegionsLocationsGetAllRegionsPost(body?: StandardGetListRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetAllRegionsLocationsListModelStandardResponse>>;
    public apiV1RegionsLocationsGetAllRegionsPost(body?: StandardGetListRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetAllRegionsLocationsListModelStandardResponse>>;
    public apiV1RegionsLocationsGetAllRegionsPost(body?: StandardGetListRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.request<GetAllRegionsLocationsListModelStandardResponse>('post',`${this.basePath}/api/v1/RegionsLocations/GetAllRegions`,
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
     * Return regions by id
     * 
     * @param regionId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1RegionsLocationsGetRegionsByIdRegionIdGet(regionId: number, observe?: 'body', reportProgress?: boolean): Observable<GetRegionByIdModelStandardResponse>;
    public apiV1RegionsLocationsGetRegionsByIdRegionIdGet(regionId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetRegionByIdModelStandardResponse>>;
    public apiV1RegionsLocationsGetRegionsByIdRegionIdGet(regionId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetRegionByIdModelStandardResponse>>;
    public apiV1RegionsLocationsGetRegionsByIdRegionIdGet(regionId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (regionId === null || regionId === undefined) {
            throw new Error('Required parameter regionId was null or undefined when calling apiV1RegionsLocationsGetRegionsByIdRegionIdGet.');
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

        return this.httpClient.request<GetRegionBy