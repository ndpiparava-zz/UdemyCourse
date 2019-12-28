import { LoggingService } from './logging.service';
import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

//This is to inject service into another service.
/* @Injectable({providedIn: 'root'}) 
-> This is alternative and lazy loading.
->  in this case not need to registers service in Providers decorater.
*/
@Injectable() 
export class AccountService {

    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];

    statusUpdated = new EventEmitter<string>();

    constructor(private loggingService: LoggingService) {

    }

    addAccount(name: string, status: string) {
        this.accounts.push({name: name, status: status});
        this.loggingService.logStatusChange(status);
    }

    updateStatus(id: number, status: string) {
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(status);

    }
}