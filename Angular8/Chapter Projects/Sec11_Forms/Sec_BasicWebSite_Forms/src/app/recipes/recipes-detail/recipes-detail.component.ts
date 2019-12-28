import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../../Services/recipe.service";
import { ShoppingService } from "src/app/Services/shopping.service";
import { Ingredient } from "../../Shared/Ingredient.model";
import { ActivatedRoute, Params, Router } from "@angular/router";


@Component({
  selector: "app-recipes-detail",
  templateUrl: "./recipes-detail.component.html",
  styleUrls: ["./recipes-detail.component.css"]
})
export class RecipesDetailComponent implements OnInit {
  recipe: Recipe;
  recipeID: number;

  constructor(
    private recipeservice: RecipeService,
    private shoppingListService: ShoppingService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.activeRoute.params.subscribe((params: Params) => {
      this.recipeID = +params["id"];
      this.recipe = this.recipeservice.getRecipe(this.recipeID);
    });
  }

  onSelectToShoopingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);

    //another way to do it is , navigate one step up and the  append path, like below
    //this.router.navigate(['../', this.recipeID, 'edit'], {relativeTo: this.activeRoute});
  }

  onEditRecipe() {
    this.router.navigate(["edit"], { relativeTo: this.activeRoute });
  }

  onDelete() {
    this.recipeservice.deleteRecipeOfIndex(this.recipeID);
    this.router.navigate(['/recipes']);
  }
}
