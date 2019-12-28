import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { AuthInterCeptorService } from "./auth-interceptor";
import { LogginInCeptorService } from './logging-interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [
    //order matters in interceptor
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterCeptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LogginInCeptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
