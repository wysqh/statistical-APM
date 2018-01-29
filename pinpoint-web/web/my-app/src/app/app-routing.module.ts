import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HeroesComponent } from "./hero/heroes.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import {TestComponent} from "./test/test.component";

const routes: Routes = [
  //{ path: '', redirectTo: '/test', pathMatch: 'full'},  //思考一下如何解决index.html问题 index.html -> test
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'test', component: TestComponent }
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
