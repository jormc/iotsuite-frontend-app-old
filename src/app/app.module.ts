import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './/app-routing.module';
import { RouterModule, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { ErrorsModule } from './modules/errors/errors.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    DashboardModule,
    ErrorsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
