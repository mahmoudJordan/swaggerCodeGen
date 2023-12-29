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
import { Account } from './account';
import { Location } from './location';

export interface AccountsLocation { 
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
    accountId?: number;
    locationId?: number;
    location?: Location;
    account?: Account;
}