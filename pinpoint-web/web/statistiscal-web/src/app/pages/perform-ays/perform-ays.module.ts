import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PerformAysRoutingModule, routedComponents} from './perform-ays-routing.module';
import { AppAysQueryComponent } from './app-ays-query/app-ays-query.component';
import {DataTablesModule} from 'angular-datatables';
import {ReactiveFormsModule} from '@angular/forms';
import {MessageService} from '../../@core/data/message.service';
import {ApplicationsService} from '../../@core/data/applications.service';
import {EffectivesService} from '../../@core/data/effectives.service';
import {LastPerformanceService} from '../../@core/data/last-performance.service';
import {UriCheckService} from '../../@core/data/uri-check.service';
import {BsDatepickerModule, BsLocaleService} from 'ngx-bootstrap';
import { MaxRequestControlComponent } from './max-request-control/max-request-control.component';
import { MaxResponseControlComponent } from './max-response-control/max-response-control.component';
import { AvgResponseControlComponent } from './avg-response-control/avg-response-control.component';
import { SerivAysQueryComponent } from './seriv-ays-query/seriv-ays-query.component';

@NgModule({
  imports: [
    DataTablesModule,
    ReactiveFormsModule,
    CommonModule,
    PerformAysRoutingModule,
    BsDatepickerModule.forRoot(),
  ],
  declarations: [
    ...routedComponents,
    AppAysQueryComponent,
    MaxRequestControlComponent,
    MaxResponseControlComponent,
    AvgResponseControlComponent,
    SerivAysQueryComponent,
  ],
  providers: [
    MessageService,
    ApplicationsService,
    EffectivesService,
    LastPerformanceService,
    UriCheckService,
    BsLocaleService,
  ],
})
export class PerformAysModule { }
