import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UserServices} from '../Services/user.services';
import { from } from 'rxjs';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{

  users : string[] = [];

  constructor(private userService: UserServices) {

  }

  ngOnInit() {

    this.users = this.userService.inactiveUsers;
  }
  

  onSetToActive(id: number) {
    this.userService.changeUserToActive(id);
  }
}
