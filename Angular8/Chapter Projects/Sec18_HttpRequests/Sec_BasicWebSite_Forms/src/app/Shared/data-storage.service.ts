import { Injectable, OnInit, OnDestroy } from "@angular/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import {map , tap} from 'rxjs/operators'

import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../Services/recipe.service";


@Injectable({ providedIn: "root" })
export class DataStorageService implements OnInit, OnDestroy {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  ngOnInit() {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put(
      "https://ng-course-recipe-book-c65b3.firebaseio.com/recipes.json",
      recipes
    ).subscribe(

        responseData => {
            console.log(responseData);
        }
    );
  }

  fetchRecipes() {

    return this.http.get<Recipe[]>(
      "https://ng-course-recipe-book-c65b3.firebaseio.com/recipes.json"
    )
    .pipe(map(
        recipes => {

            return recipes.map(recipe => {
                return {...recipe, ingredients: recipe.ingredients?recipe.ingredients: []}
            });
        }
    ),
    tap(recipes => {
        this.recipeService.setRecipes(recipes); 
    })
    );
    // .subscribe(
    //     recipes =>  {

    //         this.recipeService.setRecipes(recipes);
    //          console.log(recipes);
    //     }
    // );
  }

  ngOnDestroy() {}
}
