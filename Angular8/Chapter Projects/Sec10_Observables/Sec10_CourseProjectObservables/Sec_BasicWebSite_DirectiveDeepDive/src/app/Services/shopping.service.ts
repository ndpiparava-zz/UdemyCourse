import { Injectable } from '@angular/core';
import { Ingredient } from  '../Shared/Ingredient.model';
import { Subject } from "rxjs";


@Injectable({providedIn: 'root'})
export class ShoppingService {

    ingredinetsChanged = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [

        new Ingredient('Apple', 5),
        new Ingredient('Tomotoes', 10)
    ];


    addIngredient(ingredient: Ingredient) {

        this.ingredients.push(ingredient);

        //this is to nofity latest changes
        this.ingredinetsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {

        this.ingredients.push(...ingredients);

        //this is to nofity latest changes
        this.ingredinetsChanged.next(this.ingredients.slice());
    }

    getIngredients() {

        return this.ingredients;
    }
}