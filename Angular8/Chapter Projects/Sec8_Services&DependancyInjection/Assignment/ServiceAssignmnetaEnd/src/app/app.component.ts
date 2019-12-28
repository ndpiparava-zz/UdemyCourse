import { Component } from '@angular/core';
import { UserServices } from "./Services/user.services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  
constructor(private userService: UserServices) {

}

  onSetToInactive(id: number) {
    this.userService.changeUserToInActive(id);
  }

  onSetToActive(id: number) {
    this.userService.changeUserToActive(id);
  }
}
