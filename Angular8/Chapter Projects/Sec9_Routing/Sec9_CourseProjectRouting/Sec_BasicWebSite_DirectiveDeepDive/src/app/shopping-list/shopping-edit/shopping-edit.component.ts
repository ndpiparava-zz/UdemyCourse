import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output} from '@angular/core';
import { Ingredient } from '../../Shared/Ingredient.model'
import {ShoppingService} from '../../Services/shopping.service'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingService: ShoppingService) {
  }

  ngOnInit() {

  }

  @ViewChild('nameInput', {static: true}) nameInput: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInput: ElementRef;

  onSubmit() {
    const ingName = this.nameInput.nativeElement.value;
    const ingAmount = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.shoppingService.addIngredient(newIngredient);
  }

  onClear() {

  }

  onDelete() {

  }

}
