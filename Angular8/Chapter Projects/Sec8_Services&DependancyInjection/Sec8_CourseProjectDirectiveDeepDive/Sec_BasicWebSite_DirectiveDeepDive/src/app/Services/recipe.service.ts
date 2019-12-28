import { Injectable, EventEmitter } from '@angular/core';
import {Recipe} from '../recipes/recipe.model';
import {Ingredient} from '../Shared/Ingredient.model';



@Injectable({ providedIn: 'root' })
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();



    private recipes: Recipe[] = [

        new Recipe("Veg Burger",
            "Have a some health and light!",
            'http://tiny.cc/6ynihz',
            [new Ingredient('Buns', 2),
            new Ingredient('Veggies', 1)]),

        new Recipe("NonVeg Burger", 
        "Meat eaters!", 
        'http://tiny.cc/6ynihz',
            [new Ingredient('Meat',1),
            new Ingredient('French Fries', 1)]),

        new Recipe("Veg Sandwich", 
        "Veggie Potato mix well!", 
        'http://tiny.cc/6ynihz',
            [new Ingredient('Breads', 2),
            new Ingredient('Hashbrowns', 1)])
    ]; 

    getRecipes() {
        return this.recipes;
    }

}