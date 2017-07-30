import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { ConversionComponent } from './conversion/conversion.component';
import { ConversionService } from './conversion/conversion.service';
import { AdsenseModule } from 'ng2-adsense'

@NgModule({
  declarations: [
    AppComponent,
    ConversionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    MaterialModule.forRoot(),
    AdsenseModule.forRoot({
      adClient: 'ca-pub-4672802874016023',
      // adSlot: 7259870550
    }),

  ],
  providers: [ConversionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
