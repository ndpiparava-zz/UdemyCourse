import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';
import {Recipe} from '../../recipe.model';


@Component({
  selector: 'recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {

  @Input() recipe:Recipe;
  @Input() recipeIndex: Recipe;

  ngOnInit() {
  }

}
