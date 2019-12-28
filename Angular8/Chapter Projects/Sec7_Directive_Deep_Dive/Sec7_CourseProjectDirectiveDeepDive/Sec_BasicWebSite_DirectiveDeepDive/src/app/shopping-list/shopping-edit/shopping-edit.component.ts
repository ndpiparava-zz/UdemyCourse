import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output} from '@angular/core';
import { Ingredient } from '../../Shared/Ingredient.model'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  

  @ViewChild('nameInput', {static: true}) nameInput: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInput: ElementRef;

  @Output() ingredientAdded = new EventEmitter <Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const ingName = this.nameInput.nativeElement.value;
    const ingAmount = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }

  onClear() {

  }

  onDelete() {

  }

}
