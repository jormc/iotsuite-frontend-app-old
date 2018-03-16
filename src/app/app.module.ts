import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardModule } from './modules/dashboard/dashboard.module';
import { ConfigModule } from './modules/config/config.module';
import { ErrorModule } from './modules/error/error.module';

import { AppRoutingModule } from './app-routing.module';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './modules/home/home.component';
import { ClockComponent } from './components/clock/clock.component';
import { DateComponent } from './components/date/date.component';
import { WidgetListComponent } from './modules/widget/widget-list.component';
import { WidgetComponent } from './modules/widget/widget.component';
import { WidgetModule } from './modules/widget/widget.module';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ClockComponent,
    DateComponent,
    HomeComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    DashboardModule,
    ConfigModule,
    ErrorModule,
    WidgetModule,
    AppRoutingModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
