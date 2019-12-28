import { Component, OnInit, ViewChild, EventEmitter, Output, OnDestroy} from '@angular/core';
import { Ingredient } from '../../Shared/Ingredient.model'
import {ShoppingService} from '../../Services/shopping.service'
import { NgForm } from "@angular/forms";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f', {static: true}) shoppinglistForm : NgForm;

  shoppingEditSubScription : Subscription;
  editMode = false;
  editedItemIndex : number;
  editedItem: Ingredient;

  constructor(private shoppingService: ShoppingService) {
  }

  ngOnInit() {

     this.shoppingEditSubScription =  this.shoppingService.startEditing.subscribe(

      (index:number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.shoppingService.getIngredientOfIndex(index);

        this.shoppinglistForm.setValue({
          name : this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
                  
    );
  }


  onSubmit(form : NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
  
    if (this.editMode) {
      this.shoppingService.updateIngredinet(this.editedItemIndex, newIngredient);
    }

    else {
      this.shoppingService.addIngredient(newIngredient);
    }

    this.editMode = false;
    this.shoppinglistForm.reset();
  }

  onClear() {

    this.shoppinglistForm.reset();
    this.editMode = false;

  }

  onDelete() {

    this.shoppingService.removeIngredient(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy(){
    this.shoppingEditSubScription.unsubscribe();
  }

}
