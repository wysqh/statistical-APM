import {RouterModule, Routes} from '@angular/router';
import {NutchExtensionComponent} from './nutch-extension.component';
import {NerComponent} from './ner/ner.component';
import {FaceRecComponent} from './face-rec/face-rec.component';
import {NgModule} from '@angular/core';
import {UiFeaturesComponent} from '../ui-features/ui-features.component';
import {CrawlComponent} from './crawl/crawl.component';

const routes: Routes = [{
  path: '',
  component: NutchExtensionComponent,
  children: [{
    path: 'ner',
    component: NerComponent,
  }, {
    path: 'face-rec',
    component: FaceRecComponent,
  }, {
    path: 'crawl',
    component: CrawlComponent,
  }]
}]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})

export class NutchExtensionRoutingModule {

}

export const nutchRoutedComponents = [
  NutchExtensionComponent,
  NerComponent,
  FaceRecComponent,
];
