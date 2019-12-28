import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService, AuthResponseData } from "./auth.service";
import { Observable } from "rxjs";
import { error } from "protractor";
import { Router } from '@angular/router';
import { relative } from 'path';

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html"
})
export class AuthComponent implements OnInit, OnDestroy {
  isLoginMode = false;
  isLoading = false;
  errorMessage: string = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  ngOnDestroy() {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    //console.log(form.value);
    if (!form.valid) {
      return;
    }

    this.isLoading = true;

    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;

    if (this.isLoginMode) {
      //...
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(email, password);
    }
    authObs.subscribe(
      responsedata => {
        console.log(responsedata);
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      errorMessage => {
        this.isLoading = false;
        this.errorMessage = errorMessage;
        console.log(errorMessage);
      }
    );
    form.reset();
  }
}
