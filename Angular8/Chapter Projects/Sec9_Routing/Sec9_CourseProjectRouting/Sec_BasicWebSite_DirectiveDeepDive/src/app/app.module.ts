import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { Routes, RouterModule } from "@angular/router";

import { HeaderComponent } from './Header/header.component';

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropDownDirective } from "./Shared/dropdown.directive";
import { from } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipsEditComponent } from './recipes/recips-edit/recips-edit.component';


// const appRoutes : Routes  =[

//    {path: "", component: RecipesComponent},
//    {path:"recipes", component: RecipesComponent},
//    {path: 'shoppinglist', component: ShoppingListComponent}
// ];


@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent, RecipesComponent, RecipesListComponent, 
    RecipesDetailComponent, RecipesItemComponent, ShoppingListComponent, 
    ShoppingEditComponent, DropDownDirective, RecipeStartComponent, RecipsEditComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
