import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './hero/heroes.component';
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

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    DataTablesModule,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    TestComponent,
    ChartsComponent,
    PerformanceComponent
  ],
  providers: [ HeroService, MessageService, ApplicationsService, EffectivesService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
