import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';


@Injectable({ providedIn: 'root' }) 
export class UserServices  {

    constructor(private counterService: CounterService) {

    }

    activeUsers: string[] = ['Max', 'Anna'];
    inactiveUsers: string[] = ['Chris', 'Manu'];

    changeUserToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.counterService.incrementActiveToInActive();
    }

    changeUserToInActive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counterService.incrementInActiveToActive();
    }

}