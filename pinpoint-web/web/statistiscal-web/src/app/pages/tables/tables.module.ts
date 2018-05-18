import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { TasksComponent } from './tasks/tasks.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';

@NgModule({
  imports: [
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
    DataTablesModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ...routedComponents,
    TasksComponent,
  ],
  providers: [
    SmartTableService,
  ],
})
export class TablesModule { }
