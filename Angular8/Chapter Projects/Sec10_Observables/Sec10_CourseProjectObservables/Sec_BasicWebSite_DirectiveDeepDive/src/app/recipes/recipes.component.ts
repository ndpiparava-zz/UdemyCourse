import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Recipe } from  './recipe.model';
import { RecipeService}  from '../Services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  
  constructor(private recipeservice: RecipeService) {
      
   }

  ngOnInit() {
  }

}
