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
import { PermissionsListModel } from './permissionsListModel';
import { PortalType } from './portalType';

export interface PermissionGroupModel { 
    id?: number;
    isParent?: boolean;
    parentId?: number;
    uniqueId?: number;
    portalType?: PortalType;
    title?: string;
    description?: string;
    orderId?: number;
    permissionsListModels?: Array<PermissionsListModel>;
    permissionGroupModels?: Array<PermissionGroupModel>;
}