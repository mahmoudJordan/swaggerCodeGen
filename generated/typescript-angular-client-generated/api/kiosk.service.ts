ic apiV1KioskGetAllDriversByLocationIdGet(locationId?: number, pageIndex?: number, pageSize?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SetupLocationDtoStandardResponse>>;
    public apiV1KioskGetAllDriversByLocationIdGet(locationId?: number, pageIndex?: number, pageSize?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SetupLocationDtoStandardResponse>>;
    public apiV1KioskGetAllDriversByLocationIdGet(locationId?: number, pageIndex?: number, pageSize?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (locationId !== undefined && locationId !== null) {
            queryParameters = queryParameters.set('locationId', <any>locationId);
        }
        if (pageIndex !== undefined && pageIndex !== null) {
            queryParameters = queryParameters.set('pageIndex', <any>pageIndex);
        }
        if (pageSize !== undefined && pageSize !== null) {
            queryParameters = queryParameters.set('pageSize', <any>pageSize);
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

        return this.httpClient.request<SetupLocationDtoStandardResponse>('get',`${this.basePath}/api/v1/Kiosk/GetAllDriversByLocationId`,
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
     * @param deviceId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1KioskGetAllKioskVehiclesGet(locationId?: number, deviceId?: number, observe?: 'body', reportProgress?: boolean): Observable<VehiclesListDtoStandardResponse>;
    public apiV1KioskGetAllKioskVehiclesGet(locationId?: number, deviceId?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<VehiclesListDtoStandardResponse>>;
    public apiV1KioskGetAllKioskVehiclesGet(locationId?: number, deviceId?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<VehiclesListDtoStandardResponse>>;
    public apiV1KioskGetAllKioskVehiclesGet(locationId?: number, deviceId?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (locationId !== undefined && locationId !== null) {
            queryParameters = queryParameters.set('locationId', <any>locationId);
        }
        if (deviceId !== undefined && deviceId !== null) {
            queryParameters = queryParameters.set('deviceId', <any>deviceId);
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

        return this.httpClient.request<VehiclesListDtoStandardResponse>('get',`${this.basePath}/api/v1/Kiosk/GetAllKioskVehicles`,
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
     * @param body 
     * @param language 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1KioskGetAllLocationDevicesPost(body?: StandardGetListRequest, language?: string, observe?: 'body', reportProgress?: boolean): Observable<SetupLocationDtoStandardResponse>;
    public apiV1KioskGetAllLocationDevicesPost(body?: StandardGetListRequest, language?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SetupLocationDtoStandardResponse>>;
    public apiV1KioskGetAllLocationDevicesPost(body?: StandardGetListRequest, language?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SetupLocationDtoStandardResponse>>;
    public apiV1KioskGetAllLocationDevicesPost(body?: StandardGetListRequest, language?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (language !== undefined && language !== null) {
            queryParameters = queryParameters.set('language', <any>language);
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

        return this.httpClient.request<SetupLocationDtoStandardResponse>('post',`${this.basePath}/api/v1/Kiosk/GetAllLocationDevices`,
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
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1KioskLinkDeviceWithLocationPost(body?: DeviceLocationRequest, observe?: 'body', reportProgress?: boolean): Observable<SetupLocationDtoStandardResponse>;
    public apiV1KioskLinkDeviceWithLocationPost(body?: DeviceLocationRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SetupLocationDtoStandardResponse>>;
    public apiV1KioskLinkDeviceWithLocationPost(body?: DeviceLocationRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SetupLocationDtoStandardResponse>>;
    public apiV1KioskLinkDeviceWithLocationPost(body?: DeviceLocationRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.request<SetupLocationDtoStandardResponse>('post',`${this.basePath}/api/v1/Kiosk/LinkDeviceWithLocation`,
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
     * @param deviceId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1KioskUnLinkDeviceWithLocationKioskPut(deviceId?: number, observe?: 'body', reportProgress?: boolean): Observable<SetupLocationDtoStandardResponse>;
    public apiV1KioskUnLinkDeviceWithLocationKioskPut(deviceId?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SetupLocationDtoStandardResponse>>;
    public apiV1KioskUnLinkDeviceWithLocationKioskPut(deviceId?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SetupLocationDtoStandardResponse>>;
    public apiV1KioskUnLinkDeviceWithLocationKioskPut(deviceId?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (deviceId !== undefined && deviceId !== null) {
            queryParameters = queryParameters.set('deviceId', <any>deviceId);
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

        return this.httpClient.request<SetupLocationDtoStandardResponse>('put',`${this.basePath}/api/v1/Kiosk/UnLinkDeviceWithLocationKiosk`,
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
     * @param deviceLocationId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1KioskUnLinkDeviceWithLocationPut(deviceLocationId?: number, observe?: 'body', reportProgress?: boolean): Observable<SetupLocationDtoStandardResponse>;
    public apiV1KioskUnLinkDeviceWithLocationPut(deviceLocationId?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SetupLocationDtoStandardResponse>>;
    public apiV1KioskUnLinkDeviceWithLocationPut(deviceLocationId?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SetupLocationDtoStandardResponse>>;
    public apiV1KioskUnLinkDeviceWithLocationPut(deviceLocationId?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (deviceLocationId !== undefined && deviceLocationId !== null) {
            queryParameters = queryParameters.set('deviceLocationId', <any>deviceLocationId);
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

        return this.httpClient.request<SetupLocationDtoStandardResponse>('put',`${this.basePath}/api/v1/Kiosk/UnLinkDeviceWithLocation`,
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
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1KioskUpdateDriverVehicleAssignmentPut(body?: UpdateAttendanceTimeRequest, observe?: 'body', reportProgress?: boolean): Observable<SetupLocationDtoStandardResponse>;
    public apiV1KioskUpdateDriverVehicleAssignmentPut(body?: UpdateAttendanceTimeRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SetupLocationDtoStandardResponse>>;
    public apiV1KioskUpdateDriverVehicleAssignmentPut(body?: UpdateAttendanceTimeRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SetupLocationDtoStandardResponse>>;
    public apiV1KioskUpdateDriverVehicleAssignmentPut(body?: UpdateAttendanceTimeRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
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

import { CheckInRequest } from '../model/checkInRequest';
import { CheckOutRequest } from '../model/checkOutRequest';
import { DeviceLocationRequest } from '../model/deviceLocationRequest';
import { DriverVehicleAssignmentRequest } from '../model/driverVehicleAssignmentRequest';
import { SetupLocationDtoStandardResponse } from '../model/setupLocationDtoStandardResponse';
import { StandardGetListRequest } from '../model/standardGetListRequest';
import { UpdateAttendanceTimeRequest } from '../model/updateAttendanceTimeRequest';
import { VehiclesListDtoStandardResponse } from '../model/vehiclesListDtoStandardResponse';
import { VerifyDriverRequest } from '../model/verifyDriverRequest';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class KioskService {

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
    public apiV1KioskAddDriverVehicleAssignmentPost(body?: DriverVehicleAssignmentRequest, observe?: 'body', reportProgress?: boolean): Observable<SetupLocationDtoStandardResponse>;
    public apiV1KioskAddDriverVehicleAssignmentPost(body?: DriverVehicleAssignmentRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SetupLocationDtoStandardResponse>>;
    public apiV1KioskAddDriverVehicleAssignmentPost(body?: DriverVehicleAssignmentRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SetupLocationDtoStandardResponse>>;
    public apiV1KioskAddDriverVehicleAssignmentPost(body?: DriverVehicleAssignmentRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.request<SetupLocationDtoStandardResponse>('post',`${this.basePath}/api/v1/Kiosk/AddDriverVehicleAssignment`,
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
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1KioskDeleteDriverVehicleAssignmentDelete(id?: number, observe?: 'body', reportProgress?: boolean): Observable<SetupLocationDtoStandardResponse>;
    public apiV1KioskDeleteDriverVehicleAssignmentDelete(id?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SetupLocationDtoStandardResponse>>;
    public apiV1KioskDeleteDriverVehicleAssignmentDelete(id?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SetupLocationDtoStandardResponse>>;
    public apiV1KioskDeleteDriverVehicleAssignmentDelete(id?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.set('id', <any>id);
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

        return this.httpClient.request<SetupLocationDtoStandardResponse>('delete',`${this.basePath}/api/v1/Kiosk/DeleteDriverVehicleAssignment`,
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
     * @param body 
     * @param deviceId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1KioskDriverVehicleAssignmentCheckInPost(body?: CheckInRequest, deviceId?: number, observe?: 'body', reportProgress?: boolean): Observable<SetupLocationDtoStandardResponse>;
    public apiV1KioskDriverVehicleAssignmentCheckInPost(body?: CheckInRequest, deviceId?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SetupLocationDtoStandardResponse>>;
    public apiV1KioskDriverVehicleAssignmentCheckInPost(body?: CheckInRequest, deviceId?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SetupLocationDtoStandardResponse>>;
    public apiV1KioskDriverVehicleAssignmentCheckInPost(body?: CheckInRequest, deviceId?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (deviceId !== undefined && deviceId !== null) {
            queryParameters = queryParameters.set('deviceId', <any>deviceId);
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

        return this.httpClient.request<SetupLocationDtoStandardResponse>('post',`${this.basePath}/api/v1/Kiosk/DriverVehicleAssignmentCheckIn`,
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
     * @param body 
     * @param deviceId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1KioskDriverVehicleAssignmentCheckOutPost(body?: CheckOutRequest, deviceId?: number, observe?: 'body', reportProgress?: boolean): Observable<SetupLocationDtoStandardResponse>;
    public apiV1KioskDriverVehicleAssignmentCheckOutPost(body?: CheckOutRequest, deviceId?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SetupLocationDtoStandardResponse>>;
    public apiV1KioskDriverVehicleAssignmentCheckOutPost(body?: CheckOutRequest, deviceId?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SetupLocationDtoStandardResponse>>;
    public apiV1KioskDriverVehicleAssignmentCheckOutPost(body?: CheckOutRequest, deviceId?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (deviceId !== undefined && deviceId !== null) {
            queryParameters = queryParameters.set('deviceId', <any>deviceId);
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

        return this.httpClient.request<SetupLocationDtoStandardResponse>('post',`${this.basePath}/api/v1/Kiosk/DriverVehicleAssignmentCheckOut`,
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
     * @param body 
     * @param date 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1KioskGetAllDriversAssignmentsPost(body?: StandardGetListRequest, date?: Date, observe?: 'body', reportProgress?: boolean): Observable<SetupLocationDtoStandardResponse>;
    public apiV1KioskGetAllDriversAssignmentsPost(body?: StandardGetListRequest, date?: Date, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SetupLocationDtoStandardResponse>>;
    public apiV1KioskGetAllDriversAssignmentsPost(body?: StandardGetListRequest, date?: Date, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SetupLocationDtoStandardResponse>>;
    public apiV1KioskGetAllDriversAssignmentsPost(body?: StandardGetListRequest, date?: Date, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (date !== undefined && date !== null) {
            queryParameters = queryParameters.set('date', <any>date.toISOString());
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

        return this.httpClient.request<SetupLocationDtoStandardResponse>('post',`${this.basePath}/api/v1/Kiosk/GetAllDriversAssignments`,
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
     * @param locationId 
     * @param pageIndex 
     * @param pageSize 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1KioskGetAllDriversByLocationIdGet(locationId?: number, pageIndex?: number, pageSize?: number, observe?: 'body', reportProgress?: boolean): Observable<SetupLocationDtoStandardResponse>;
    publ const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
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

        return this.httpClient.request<SetupLocationDtoStandardResponse>('put',`${this.basePath}/api/v1/Kiosk/UpdateDriverVehicleAssignment`,
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
     * @param locationId 
     * @param language 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1KioskValidateLocationGet(locationId?: number, language?: string, observe?: 'body', reportProgress?: boolean): Observable<SetupLocationDtoStandardResponse>;
    public apiV1KioskValidateLocationGet(locationId?: number, language?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SetupLocationDtoStandardResponse>>;
    public apiV1KioskValidateLocationGet(locationId?: number, language?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SetupLocationDtoStandardResponse>>;
    public apiV1KioskValidateLocationGet(locationId?: number, language?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (locationId !== undefined && locationId !== null) {
            queryParameters = queryParameters.set('locationId', <any>locationId);
        }
        if (language !== undefined && language !== null) {
            queryParameters = queryParameters.set('language', <any>language);
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

        return this.httpClient.request<SetupLocationDtoStandardResponse>('get',`${this.basePath}/api/v1/Kiosk/ValidateLocation`,
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
     * @param body 
     * @param language 
     * @param deviceId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1KioskVerifyDriverPost(body?: VerifyDriverRequest, language?: string, deviceId?: number, observe?: 'body', reportProgress?: boolean): Observable<SetupLocationDtoStandardResponse>;
    public apiV1KioskVerifyDriverPost(body?: VerifyDriverRequest, language?: string, deviceId?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SetupLocationDtoStandardResponse>>;
    public apiV1KioskVerifyDriverPost(body?: VerifyDriverRequest, language?: string, deviceId?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SetupLocationDtoStandardResponse>>;
    public apiV1KioskVerifyDriverPost(body?: VerifyDriverRequest, language?: string, deviceId?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (language !== undefined && language !== null) {
            queryParameters = queryParameters.set('language', <any>language);
        }
        if (deviceId !== undefined && deviceId !== null) {
            queryParameters = queryParameters.set('deviceId', <any>deviceId);
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

        return this.httpClient.request<SetupLocationDtoStandardResponse>('post',`${this.basePath}/api/v1/Kiosk/VerifyDriver`,
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

}
