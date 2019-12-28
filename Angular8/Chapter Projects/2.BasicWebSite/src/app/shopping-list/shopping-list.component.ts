import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../Shared/Ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [

    new Ingredient('Apple', 5),
    new Ingredient('Tomotoes', 10)
  ];

  constructor() { }

  ngOnInit() {
  }

}
