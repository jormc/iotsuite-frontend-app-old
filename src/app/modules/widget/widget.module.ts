import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetDetailComponent } from './widget-detail.component';
import { WidgetEditComponent } from './widget-edit.component';
import { WidgetListComponent } from './widget-list.component';
import { WidgetComponent } from './widget.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WidgetDetailComponent,
    WidgetEditComponent,
    WidgetListComponent,
    WidgetComponent
  ],
  providers: []
})
export class WidgetModule { }
