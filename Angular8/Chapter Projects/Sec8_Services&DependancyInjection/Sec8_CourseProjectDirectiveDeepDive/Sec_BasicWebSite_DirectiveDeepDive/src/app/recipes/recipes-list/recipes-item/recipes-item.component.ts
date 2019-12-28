import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';
import {Recipe} from '../../recipe.model';
import { RecipeService} from '../../../Services/recipe.service';


@Component({
  selector: 'recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {

  @Input() recipe:Recipe;

  constructor(private recipeservice: RecipeService) { }

  ngOnInit() {
  }

  onSelected() {
    this.recipeservice.recipeSelected.emit(this.recipe);
  }

}
