import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ConfigComponent } from './config/config.component';
import { PersistenceConfigComponent } from './persistence-config/persistence-config.component';
import { LanguageConfigComponent } from './language-config/language-config.component';

@NgModule({
  imports: [
    NgbModule,
    CommonModule
  ],
  declarations: [
    ConfigComponent,
    PersistenceConfigComponent,
    LanguageConfigComponent
  ]
})
export class ConfigModule { }
