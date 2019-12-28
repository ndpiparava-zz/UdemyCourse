import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("A Test Receipe", "This is a test", 'http://tiny.cc/6ynihz'),
    new Recipe("A Test Receipe2", "This is a test2", 'http://tiny.cc/6ynihz'),
    new Recipe("A Test Receipe3", "This is a test3", 'http://tiny.cc/6ynihz')
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
