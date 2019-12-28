import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ServerComponent} from './server/server.component';
import { TestcomponentComponent } from './server/testcomponent/testcomponent.component'

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    TestcomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
