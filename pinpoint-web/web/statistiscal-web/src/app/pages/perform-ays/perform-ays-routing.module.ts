import { Routes, RouterModule } from '@angular/router';
import { AppAysComponent } from './app-ays/app-ays.component';
import { AppServComponent } from './app-serv/app-serv.component';
import { SerivAysComponent } from './seriv-ays/seriv-ays.component';
import {PerformAysComponent} from './perform-ays.component';
import {NgModule} from '@angular/core';

const routes: Routes = [{
  path: '',
  component: PerformAysComponent,
  children: [{
    path: 'appays',
    component: AppAysComponent,
  }, {
    path: 'appserv',
    component: AppServComponent,
  }, {
    path: 'seriays',
    component: SerivAysComponent,
  }],
}]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})

export class PerformAysRoutingModule {

}

export const routedComponents = [
  PerformAysComponent,
  AppAysComponent,
  AppServComponent,
  SerivAysComponent,
];
