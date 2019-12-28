import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("A Test Receipe", "This is a test", 'http://tiny.cc/6ynihz'),
    new Recipe("A Test Receipe2", "This is a test2", 'http://tiny.cc/6ynihz'),
    new Recipe("A Test Receipe3", "This is a test3", 'http://tiny.cc/6ynihz')
    
  ];

  onRecipeSelected(recipeSelected: Recipe) {

    this.recipeWasSelected.emit(recipeSelected);
  }
  

  constructor() { }

  ngOnInit() {
  }

}
