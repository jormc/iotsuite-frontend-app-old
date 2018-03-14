import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigComponent } from './config.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ConfigComponent
  ],
  exports: [
    ConfigComponent
  ]
})
export class ConfigModule { }
