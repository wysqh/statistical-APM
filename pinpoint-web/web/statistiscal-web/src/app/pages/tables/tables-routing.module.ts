import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
import {TasksComponent} from './tasks/tasks.component';
import {NerServiceService} from '../../@core/data/ner-service.service';

const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [{
    path: 'smart-table',
    component: SmartTableComponent,
  }, {
    path: 'tasks',
    component: TasksComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    NerServiceService,
  ],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
  TasksComponent,
  SmartTableComponent,
];
