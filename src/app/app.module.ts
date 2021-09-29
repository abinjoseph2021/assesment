import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TablePopupComponent } from './table-popup/table-popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PiechartPopupComponent } from './piechart-popup/piechart-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    TablePopupComponent,
    PiechartPopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
