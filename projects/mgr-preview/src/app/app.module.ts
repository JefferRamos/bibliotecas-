import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NglCoreModule  } from 'projects/ngl-core/src/public_api';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    NglCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
