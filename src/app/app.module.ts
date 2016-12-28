import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { ConversionComponent } from './conversion/conversion.component';
import { ConversionService } from './conversion/conversion.service';

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
    MaterialModule.forRoot()
  ],
  providers: [ConversionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
