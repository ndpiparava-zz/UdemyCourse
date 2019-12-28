import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShortenPipe } from "./shorten.pipes";


import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import { ShortingPipe } from './shorting.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShortenPipe,
    FilterPipe,
    ShortingPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
