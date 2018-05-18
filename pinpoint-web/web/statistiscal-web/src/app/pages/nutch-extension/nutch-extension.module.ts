import {NgModule} from '@angular/core';
import {BsDatepickerModule, BsLocaleService, TooltipModule} from 'ngx-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import {CommonModule} from '@angular/common';
import {MessageService} from '../../@core/data/message.service';
import {NutchExtensionRoutingModule, nutchRoutedComponents} from './nutch-extension-routing.module';
import {ThemeModule} from '../../@theme/theme.module';
import {NerServiceService} from '../../@core/data/ner-service.service';
import {UiFeaturesModule} from '../ui-features/ui-features.module';
import { CrawlComponent } from './crawl/crawl.component';
import {ComponentsModule} from '../components/components.module';
import {ToasterModule} from 'angular2-toaster';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    ThemeModule,
    ToasterModule,
    ComponentsModule,
    UiFeaturesModule,
    DataTablesModule,
    ReactiveFormsModule,
    CommonModule,
    NutchExtensionRoutingModule,
    NgxDatatableModule,
  ],
  declarations: [
    ...nutchRoutedComponents,
    CrawlComponent,
  ],
  providers: [
    MessageService,
    BsLocaleService,
    NerServiceService,
  ],
})
export class NutchExtensionModule { }
