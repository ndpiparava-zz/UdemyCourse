import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterState,
  RouterStateSnapshot
} from "@angular/router";
import { Recipe } from "./recipe.model";
import { DataStorageService } from "../Shared/data-storage.service";
import { RecipeService } from "../Services/recipe.service";

@Injectable({ providedIn: "root" })
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private recipeService: RecipeService
  ) {}

  resolve(activeRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const recipes = this.recipeService.getRecipes();
      if (recipes.length === 0) {
        return this.dataStorageService.fetchRecipes();
      }

      else {
          return recipes;
      }
    
  }
}
