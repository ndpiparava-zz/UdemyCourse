import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService} from '../../Services/recipe.service';
import { ShoppingService } from 'src/app/Services/shopping.service';
import { Ingredient } from '../../Shared/Ingredient.model';


@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  recipe : Recipe;

  constructor(private recipeservice: RecipeService, private shoppingListService: ShoppingService) { 
  
    this.recipeservice.recipeSelected.subscribe(
      (recipe : Recipe) => this.recipe = recipe
    );

  }

  ngOnInit() {
  }

  onSelectToShoopingList(ingredients: Ingredient[]){
  
    this.shoppingListService.addIngredients(ingredients);
      
  }


}
