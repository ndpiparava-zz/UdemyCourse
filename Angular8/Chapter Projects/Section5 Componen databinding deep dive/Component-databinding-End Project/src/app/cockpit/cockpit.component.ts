import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  // newServerName = '';
  // newServerContent = '';
  
  //Viewchild will hold ref to local reference to serverContentInput template.
  //Should not use  Viewchild to modify dom though it possible.
  @ViewChild('serverContentInput', { static: true }) serverContentInput : ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverNameInput: HTMLInputElement) {

    console.log(this.serverContentInput);
    // console.log(serverNameInput.value);
    this.serverCreated.emit({
      serverName: serverNameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.bluePrintCreated.emit({ 
      serverName: serverNameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value 
    });
  }

}
