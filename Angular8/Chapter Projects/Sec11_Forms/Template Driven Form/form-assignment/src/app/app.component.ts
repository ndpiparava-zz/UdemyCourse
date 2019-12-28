import { Component, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  
  title = "form-assignment";

 @ViewChild('f', {static:true}) userSubscriptionFrom : NgForm;

  defaultSubScription = "Basic";
  submitted = false;
  subscriptions = ['Basic', 'Advance', 'Pro'];

  user = {
    email: "",
    password: "",
    subscription: ""
  };

  onSubmit() {
    this.user.email = this.userSubscriptionFrom.value.userData.email;
    this.user.password = this.userSubscriptionFrom.value.userData.password;
    this.user.subscription = this.userSubscriptionFrom.value.subscription;

    this.submitted = true;
  }
}
