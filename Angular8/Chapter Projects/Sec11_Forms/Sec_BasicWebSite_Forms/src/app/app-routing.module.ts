import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";

import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipesDetailComponent } from "./recipes/recipes-detail/recipes-detail.component";
import { RecipesListComponent } from "./recipes/recipes-list/recipes-list.component";
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import {RecipsEditComponent}  from './recipes/recips-edit/recips-edit.component'

const appRoutes: Routes = [
  { path: "", redirectTo: "/recipes", pathMatch: "full" },
  {
    path: "recipes",
    component: RecipesComponent,
    children: [
      { path: "", component: RecipeStartComponent },
      {path : 'new', component: RecipsEditComponent},
      { path: ":id", component: RecipesDetailComponent },
      { path: ":id/edit", component: RecipsEditComponent }
      
    ]
  },
  { path: "shoppinglist", component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],

  exports: [RouterModule]
})
export class AppRoutingModule {}
