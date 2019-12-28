import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recips-edit',
  templateUrl: './recips-edit.component.html',
  styleUrls: ['./recips-edit.component.css']
})
export class RecipsEditComponent implements OnInit {


  recipeID : number;
  editMode = false;



  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activeRoute.params.subscribe(
      (params: Params) => {

        const id = +params['id'];
        this.recipeID = id;
        this.editMode = this.recipeID? true : false;
        console.log(this.editMode);
      }
    );

  }

}
