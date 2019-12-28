import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  evenNumbers: number[] = [];
  oddNumbers: number[] = [];
  OnIntervalFired(firedNumber: number) {
    //this.evenNumbers.push(firedNumber);

    if (firedNumber % 2  == 0) {
      this.evenNumbers.push(firedNumber)
    }
    else {
      this.oddNumbers.push(firedNumber)
    }
    console.log(firedNumber);
  }
}
