import { Injectable } from '@angular/core';
import { Ingredient } from  '../Shared/Ingredient.model';


@Injectable({providedIn: 'root'})
export class ShoppingService {


    private ingredients: Ingredient[] = [

        new Ingredient('Apple', 5),
        new Ingredient('Tomotoes', 10)
    ];


    addIngredient(ingredient: Ingredient) {

        this.ingredients.push(ingredient);
    }

    addIngredients(ingredients: Ingredient[]) {

        this.ingredients.push(...ingredients);
    }

    getIngredients() {

        return this.ingredients;
    }
}