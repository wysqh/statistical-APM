import {NgModule} from '@angular/core';
import {BsDatepickerModule, BsLocaleService} from 'ngx-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import {CommonModule} from '@angular/common';
import {MessageService} from '../../@core/data/message.service';
import {NutchExtensionRoutingModule, nutchRoutedComponents} from './nutch-extension-routing.module';
import {ThemeModule} from '../../@theme/theme.module';
import {NerServiceService} from '../../@core/data/ner-service.service';
import {ModalComponent} from '../ui-features/modals/modal/modal.component';
import {UiFeaturesModule} from '../ui-features/ui-features.module';

@NgModule({
  imports: [
    ThemeModule,
    UiFeaturesModule,
    DataTablesModule,
    ReactiveFormsModule,
    CommonModule,
    NutchExtensionRoutingModule,
    BsDatepickerModule.forRoot(),
  ],
  declarations: [
    ...nutchRoutedComponents,
  ],
  providers: [
    MessageService,
    BsLocaleService,
    NerServiceService,
  ]
})
export class NutchExtensionModule { }
