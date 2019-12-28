import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService  } from "../services/logging.service";
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingService,
              private acclountService: AccountService) {

  }

  onSetTo(status: string) {
    this.acclountService.updateStatus(this.id, this.account.status)
    // console.log('A server status changed, new status: ' + status);
    //this.loggingService.logStatusChange(status);
    this.acclountService.statusUpdated.emit(status);
  }

}
