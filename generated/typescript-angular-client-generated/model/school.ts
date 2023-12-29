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
import { CustomerSchool } from './customerSchool';
import { EventSchool } from './eventSchool';
import { Incident } from './incident';
import { Location } from './location';
import { PhysicalAddress } from './physicalAddress';
import { RoutingRequest } from './routingRequest';
import { VideoRequest } from './videoRequest';

export interface School { 
    createdAtUtc?: Date;
    createdByAccountId?: number;
    modifiedAtUtc?: Date;
    modifiedByAccountId?: number;
    isDeleted?: boolean;
    deletedAtUtc?: Date;
    deletedByAccountId?: number;
    isActive?: boolean;
    activeAtUtc?: Date;
    activeByAccountId?: number;
    isArchived?: boolean;
    archivedAtUtc?: Date;
    archivedByAccountId?: number;
    unArchivedAtUtc?: Date;
    unArchivedByAccountId?: number;
    unArchivedNote?: string;
    id?: number;
    name?: string;
    websiteUrl?: string;
    additionalInfo?: string;
    locationsId?: number;
    locations?: Location;
    schoolPhysicalLocationId?: number;
    schoolPhysicalLocation?: PhysicalAddress;
    customers?: Array<CustomerSchool>;
    incidents?: Array<Incident>;
    videoRequests?: Array<VideoRequest>;
    routingRequests?: Array<RoutingRequest>;
    events?: Array<EventSchool>;
}