import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [LoggingService] // this to tell angular how to create or how give such instance of service
})
export class NewAccountComponent {

  /*
  This how we inject dependancy injection.
  -> depedancy injector simply inject instace of service class to component.
  -> depedancy injection is that we tell angular that we require such instance.
  */

  constructor(private loggingService:LoggingService,
              private accountService: AccountService) {

              this.accountService.statusUpdated.subscribe(
                (status : string) => alert('New Status:'+ status)
              );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
     //Now we access any where Logging service.
     //this.loggingService.logStatusChange(accountStatus);
     this.accountService.addAccount(accountName, accountStatus);
  }
}
