import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UserServices } from '../Services/user.services';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  users: string[] = [];
  constructor(private userService: UserServices) {

  }

  ngOnInit() {

    this.users = this.userService.activeUsers;
  }


  onSetToInactive(id: number) {
    this.userService.changeUserToInActive(id);
  }
}
