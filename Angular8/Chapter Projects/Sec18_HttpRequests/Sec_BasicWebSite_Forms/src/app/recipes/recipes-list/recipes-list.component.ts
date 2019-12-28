import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import {Recipe} from '../recipe.model'
import { RecipeService} from '../../Services/recipe.service'
import { format } from 'url';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: "app-recipes-list",
  templateUrl: "./recipes-list.component.html",
  styleUrls: ["./recipes-list.component.css"]
})
export class RecipesListComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  recipeChangedSubscription : Subscription;

  constructor(
    private recipeservice: RecipeService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.recipeChangedSubscription = this.recipeservice.recipeChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
    this.recipes = this.recipeservice.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(["new"], { relativeTo: this.activeRoute });
  }

  ngOnDestroy() {
    this.recipeChangedSubscription.unsubscribe();
  }
}
