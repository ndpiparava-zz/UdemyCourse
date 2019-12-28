import { Injectable, EventEmitter } from '@angular/core';
import {Recipe} from '../recipes/recipe.model';
import {Ingredient} from '../Shared/Ingredient.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: "root" })
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();

  /*  private recipes: Recipe[] = [
    new Recipe(
      "Veg Burger",
      "Have a some health and light!",
      "http://tiny.cc/6ynihz",
      [new Ingredient("Buns", 2), new Ingredient("Veggies", 1)]
    ),

    new Recipe("NonVeg Burger", "Meat eaters!", "http://tiny.cc/6ynihz", [
      new Ingredient("Meat", 1),
      new Ingredient("French Fries", 1)
    ]),

    new Recipe(
      "Veg Sandwich",
      "Veggie Potato mix well!",
      "http://tiny.cc/6ynihz",
      [new Ingredient("Breads", 2), new Ingredient("Hashbrowns", 1)]
    )
  ];*/

  private recipes: Recipe[] = [];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(newrecipe: Recipe) {
    this.recipes.push(newrecipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, updatedrecipe: Recipe) {
    this.recipes[index] = updatedrecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipeOfIndex(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }
}