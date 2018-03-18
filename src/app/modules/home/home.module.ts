import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConfigModule } from '../config/config.module';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LogbookComponent } from '../../components/logbook/logbook.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ConfigModule
  ],
  declarations: [
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    LogbookComponent
  ]
})
export class HomeModule { }
