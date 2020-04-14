import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {GraphSpModule} from  'graph-sp';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GraphSpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
