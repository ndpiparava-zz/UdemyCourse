import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' }) 
export class CounterService {

    activeToInActiveCounter = 0;
    InactiveToActiveCounter = 0;

    incrementActiveToInActive() {
        this.activeToInActiveCounter +=1 ;
        console.log('Active to InActive Count: '+ this.activeToInActiveCounter);
    }
    incrementInActiveToActive() {
        this.InactiveToActiveCounter += 1;
        console.log('InActive to Active Count: ' + this.InactiveToActiveCounter);
    }
}