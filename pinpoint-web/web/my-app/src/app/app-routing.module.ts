import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import {LastPerformanceStatisticsComponent} from "./last-performance-statistics/last-performance-statistics.component";
import {PerformanceComponent} from "./performance/performance.component";
import {UriPerformanceQueryComponent} from "./uri-performance-query/uri-performance-query.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {
  NbAuthComponent,
  NbLoginComponent,
  NbRegisterComponent,
  NbLogoutComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '../framework/auth';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },{
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: NbLoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  }, {
    path: 'last',
    component: LastPerformanceStatisticsComponent
  }, {
    path: 'performance',
    component: PerformanceComponent
  }, {
    path: 'uricheck',
    component: UriPerformanceQueryComponent
  }, {
    path: 'last',
    component: LastPerformanceStatisticsComponent
  }, {
    path: '**',
    component: PageNotFoundComponent
  }
]

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
