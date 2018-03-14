import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClockComponent } from './clock.component';
import { DateComponent } from './date.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ClockComponent
  ],
  exports: [
    ClockComponent,
    DateComponent
  ]
})
export class ClockModule { }
