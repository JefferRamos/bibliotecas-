import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NglCoreComponent } from './ngl-core.component';
import { NglCoreGetComponent } from './get/ngl-core-get.component';
import { NglCoreSetComponent } from './set/ngl-core-set.component';

@NgModule({
  declarations: [
    NglCoreComponent,
    NglCoreGetComponent,
    NglCoreSetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  exports: [
    NglCoreComponent,
    NglCoreGetComponent,
    NglCoreSetComponent
  ]
})
export class NglCoreModule { }
