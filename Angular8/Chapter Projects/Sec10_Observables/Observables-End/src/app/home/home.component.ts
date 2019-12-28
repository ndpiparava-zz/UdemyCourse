import { Component, OnInit, OnDestroy } from '@angular/core';
import {interval, Subscribable, Subscription, Observable} from 'rxjs'
import {map, filter} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    //build our own obervables

    // this.firstObsSubscription = interval(1000).subscribe(
    //    count => {
    //     console.log(count);
    //   }
    // );

    const customIntervaleObservables = Observable.create(observer => {
      let count = 0;
      setInterval(() => {

        observer.next(count);
        count +=1;

        if (count == 20) {
          observer.complete();
        }

        if (count > 10)
        {
            observer.error(new Error('Count i greater 3!'));   
        }
      }, 1000);
    });


    //Operators, Data operator
    /*customIntervaleObservables.pipe(map( (data : number) => {
      return 'Return: ' + (data + 1);
    }));*/

    this.firstObsSubscription = customIntervaleObservables
      .pipe(
        filter((data:number) => {
          return data % 2 == 0;
        })
        ,map((data: number) => {
          return "Return: " + (data + 1);
        })
      )
      .subscribe(
        //completeion block doen't not have  any argument, completion block can be sued for cleanup or some triggers if we want

        data => {
          console.log(data);
        },
        error => {
          alert(error.message);
        },
        () => {
          console.log("Completed!");
        }
      );

  }
  ngOnDestroy() {
    this.firstObsSubscription.unsubscribe();
  }

}
