import { Component, OnInit } from '@angular/core';

@Component({
  
  //selector: 'app-servers', // selector by tag
  //selector: '[app-servers]', selector by attribute
  // selector by class
  selector: 'app-servers', 
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Testserver';
  userName = 'userName';
  serverCreated = false;

  servers = ['TestServer', 'TestServer2']

  showSecretPassword = false;
  showSecretPasswordLogs = [];

  

  constructor() { 

    setTimeout(() => {
      this.allowNewServer = true;
    },2000)

  }

  ngOnInit() {
  }

  

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(event);
  }

  onResetuserName() {
    this.userName = ''
  }

  onToggleDetails() {

    this.showSecretPassword = !this.showSecretPassword
    this.showSecretPasswordLogs.push (new Date())
  }

}
