import { Component, OnInit } from '@angular/core';

import { Widget } from '../../model/business-layer/entities/widget';

import { AppService } from '../../app.service';
import { PersistenceTechnology } from '../../model/utils/model-utils';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  widgets: Widget[] = [];

  constructor(private appService: AppService) { }

  ngOnInit() {

    this.appService.getServiceManager().getwidgetService().findAll(PersistenceTechnology.LOCAL_STORAGE)
    .then(widgets => {
      this.widgets = widgets;
    });

  }

}
