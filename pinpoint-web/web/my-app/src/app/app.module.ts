import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroService }          from './hero.service';
import { MessageService }       from './message.service';
import { MessagesComponent }    from './messages/messages.component';
import { AppRoutingModule }     from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { TestComponent } from './test/test.component';
import { DataTablesModule } from 'angular-datatables';
import {ApplicationsService} from "./applications.service";
import { ChartsComponent } from './charts/charts.component';
import {HttpModule} from "@angular/http";
import { PerformanceComponent } from './performance/performance.component';
import {EffectivesService} from "./effectives.service";
import {BsDatepickerModule, BsLocaleService, TimepickerModule} from "ngx-bootstrap";
import { MyTimepickerComponent } from './my-timepicker/my-timepicker.component';
import { MyDatepickerComponent } from './my-datepicker/my-datepicker.component';
import { MyDateFormComponent } from './my-date-form/my-date-form.component';
import { QueryControlComponent } from './query-control/query-control.component';
import { LastPerformanceStatisticsComponent } from './last-performance-statistics/last-performance-statistics.component';
import { AvgResponseControlComponent } from './avg-response-control/avg-response-control.component';
import { MaxResponseControlComponent } from './max-response-control/max-response-control.component';
import { MaxRequestControlComponent } from './max-request-control/max-request-control.component';
import {NbThemeModule} from "@nebular/theme";
import {RouterModule, Routes} from "@angular/router";
import { NbSidebarModule, NbLayoutModule, NbSidebarService } from "@nebular/theme";
import {LastPerformanceService} from "./last-performance.service";
import { UriQueryControlComponent } from './uri-query-control/uri-query-control.component';
import {UriCheckServiceService} from "./uri-check-service.service";
import { UriPerformanceQueryComponent } from './uri-performance-query/uri-performance-query.component';
import { UserLoginNebularTestComponent } from './user-login-nebular-test/user-login-nebular-test.component';
import {NB_AUTH_TOKEN_WRAPPER_TOKEN, NbAuthModule, NbEmailPassAuthProvider} from "../framework/auth";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {NbAuthJWTToken} from "../framework/auth/services";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    DataTablesModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    NbThemeModule.forRoot({name: 'default'}),
    NbLayoutModule,
    NbSidebarModule,
    NbAuthModule.forRoot({
      providers: {
        email: {
          service: NbEmailPassAuthProvider,
          config: {
            token: {
              key: 'token',// this parameter tells Nebular where to look for the token
            }
          }
        }
      },
      forms: { },
    })
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    MessagesComponent,
    TestComponent,
    ChartsComponent,
    PerformanceComponent,
    MyTimepickerComponent,
    MyDatepickerComponent,
    MyDateFormComponent,
    QueryControlComponent,
    LastPerformanceStatisticsComponent,
    AvgResponseControlComponent,
    MaxResponseControlComponent,
    MaxRequestControlComponent,
    UriPerformanceQueryComponent,
    UriQueryControlComponent,
    UserLoginNebularTestComponent,
    PageNotFoundComponent,
  ],
  providers: [
    HeroService,
    MessageService,
    ApplicationsService,
    EffectivesService,
    LastPerformanceService,
    UriCheckServiceService,
    BsLocaleService,
    NbSidebarService,
    NbEmailPassAuthProvider,
    { provide: NB_AUTH_TOKEN_WRAPPER_TOKEN, useClass: NbAuthJWTToken },//tell Nebular that we are waiting for JWT token
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
