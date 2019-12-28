import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model'
import { RecipeService} from '../../Services/recipe.service'
import { format } from 'url';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: "app-recipes-list",
  templateUrl: "./recipes-list.component.html",
  styleUrls: ["./recipes-list.component.css"]
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeservice: RecipeService, 
    private activeRoute: ActivatedRoute, 
    private router: Router) {

    }

  ngOnInit() {
    this.recipes = this.recipeservice.getRecipes();
  }

  onRecipeSelected(selectedRecipe: Recipe) {
    //this.recipeWasSelected.emit(recipeSelected);
    this.recipeservice.recipeSelected.emit(selectedRecipe);
  }

  onNewRecipe() {

    this.router.navigate(['new'],{relativeTo: this.activeRoute});
  }
}
