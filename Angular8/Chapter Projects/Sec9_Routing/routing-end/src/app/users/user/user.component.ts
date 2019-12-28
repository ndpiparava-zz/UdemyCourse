import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit , OnDestroy{
  user: {id: number, name: string};
  paramsSubscription: Subscription;

  constructor(private activeRoute: ActivatedRoute) { 

  }

  ngOnInit() {

    this.user = {

      id: this.activeRoute.snapshot.params['id'],
      name: this.activeRoute.snapshot.params['name']
    };

    //this is to subscribe observables and fired whenver any update in activeRoute.params
    this.paramsSubscription = this.activeRoute.params.subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );

  }


  /*
  Note : Angular destroy subscription when components gets destroy so we dont need to do below.

  .. But we have to destroy if we creates our own observables.
  */
  ngOnDestroy() {

    this.paramsSubscription.unsubscribe();
  }


}
