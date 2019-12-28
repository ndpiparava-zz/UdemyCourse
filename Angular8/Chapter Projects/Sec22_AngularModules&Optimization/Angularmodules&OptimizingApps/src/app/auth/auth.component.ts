import {
  Component,
  OnInit,
  OnDestroy,
  ComponentFactoryResolver,
  ViewChild
} from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService, AuthResponseData } from "./auth.service";
import { Observable, Subscribable, Subscription } from "rxjs";
import { error } from "protractor";
import { Router } from "@angular/router";
import { relative } from "path";
import { AlertComponent } from "../shared/alert/alert.component";
import { PlaceholderDirective } from "../shared/Helper/placeholder.directive";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html"
})
export class AuthComponent implements OnInit, OnDestroy {
  isLoginMode = false;
  isLoading = false;
  errorMessage: string = null;
  @ViewChild(PlaceholderDirective, { static: true })
  alertHost: PlaceholderDirective;

  private closeSub :Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private componentFatoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {}

  ngOnDestroy() {
    if(this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }

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
        this.router.navigate(["/recipes"]);
      },
      errorMessage => {
        this.isLoading = false;
        this.errorMessage = errorMessage;
        console.log(errorMessage);
        this.showErrorAlert(errorMessage);
      }
    );
    form.reset();
  }

  onCloseError() {
    this.errorMessage = null;
  }

  private showErrorAlert(errorMessage: string) {
    const alertCmpFactory = this.componentFatoryResolver.resolveComponentFactory(
      AlertComponent
    );
    const hostViewConatinerRef = this.alertHost.viewContainerRef;
    hostViewConatinerRef.clear();

    const componentRef =  hostViewConatinerRef.createComponent(alertCmpFactory);
    componentRef.instance.message = errorMessage;
     this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewConatinerRef.clear();
    });
  }
}
