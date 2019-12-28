import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../Shared/Ingredient.model';
import { ShoppingService } from "../Services/shopping.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients : Ingredient[] = [];

  constructor(private shoppingService: ShoppingService) {

  }
  ngOnInit() {

    this.ingredients = this.shoppingService.getIngredients();
  }

}
