import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { AccountActivityLogService } from './api/accountActivityLog.service';
import { ChartsService } from './api/charts.service';
import { CommonApiService } from './api/commonApi.service';
import { ContactService } from './api/contact.service';
import { ConversationService } from './api/conversation.service';
import { CustomersService } from './api/customers.service';
import { DriverAlertsService } from './api/driverAlerts.service';
import { DriversService } from './api/drivers.service';
import { EventsService } from './api/events.service';
import { GuardiansService } from './api/guardians.service';
import { IncidentReportService } from './api/incidentReport.service';
import { JobService } from './api/job.service';
import { KioskService } from './api/kiosk.service';
import { LytxService } from './api/lytx.service';
import { MassiveUploadService } from './api/massiveUpload.service';
import { MessagesService } from './api/messages.service';
import { MobileService } from './api/mobile.service';
import { PermissionsService } from './api/permissions.service';
import { RegionsLocationsService } from './api/regionsLocations.service';
import { ResponsibilityService } from './api/responsibility.service';
import { RideCancelationRequestService } from './api/rideCancelationRequest.service';
import { RoutingRequestsService } from './api/routingRequests.service';
import { SchoolsService } from './api/schools.service';
import { StudentsService } from './api/students.service';
import { SystemUsersService } from './api/systemUsers.service';
import { ToolsService } from './api/tools.service';
import { UsersNotificationsService } from './api/usersNotifications.service';
import { VehiclesService } from './api/vehicles.service';
import { VideoRequestsService } from './api/videoRequests.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    AccountActivityLogService,
    ChartsService,
    CommonApiService,
    ContactService,
    ConversationService,
    CustomersService,
    DriverAlertsService,
    DriversService,
    EventsService,
    GuardiansService,
    IncidentReportService,
    JobService,
    KioskService,
    LytxService,
    MassiveUploadService,
    MessagesService,
    MobileService,
    PermissionsService,
    RegionsLocationsService,
    ResponsibilityService,
    RideCancelationRequestService,
    RoutingRequestsService,
    SchoolsService,
    StudentsService,
    SystemUsersService,
    ToolsService,
    UsersNotificationsService,
    VehiclesService,
    VideoRequestsService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
