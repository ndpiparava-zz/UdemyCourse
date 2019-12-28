import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from 'src/app/Services/recipe.service';
import { Recipe } from '../recipe.model';


@Component({
  selector: "app-recips-edit",
  templateUrl: "./recips-edit.component.html",
  styleUrls: ["./recips-edit.component.css"]
})
export class RecipsEditComponent implements OnInit {
  recipeID: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(
    private activeRoute: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activeRoute.params.subscribe((params: Params) => {
      const id = +params["id"];
      this.recipeID = id;
      this.editMode = this.recipeID >= 0 ? true : false;
      console.log(this.editMode);
      this.initForm();
    });
  }

  private initForm() {
    let recipeName = "";
    let recipeImagePath = "";
    let recipeDescription = "";
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.recipeID);

      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;

      if (recipe["ingredients"]) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      } else {
      }
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(recipeImagePath, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      ingredients: recipeIngredients
    });
  }

  onAddIngredient() {
    (this.recipeForm.get("ingredients") as FormArray).controls.push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  onSubmit() {
    //console.log(this.recipeForm);

    /* Note : Instead Of creating new recipe object you directly pass form value if out form matched exact as recipe value*/

    const newRecipe = new Recipe(
      this.recipeForm.value["name"],
      this.recipeForm.value["description"],
      this.recipeForm.value["imagePath"],
      this.recipeForm.value["ingredients"]
    );

    if (this.editMode) {
      //this.recipeService.updateRecipe(this.recipeID, newRecipe);
      /* Note : Instead Of creating new recipe object you directly pass form value if out form matched exact as recipe value*/

      this.recipeService.updateRecipe(this.recipeID, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }

    this.onCancel();
  }

  //to get the Array form control, can be directly put in html but here it looks more cleaner.
  getcontrols() {
    // a getter!
    return (this.recipeForm.get("ingredients") as FormArray).controls;
  }

  onCancel() {
    this.router.navigate(["../"], { relativeTo: this.activeRoute });
  }

  onDeleteIngredeint(index: number) {

    (this.recipeForm.get("ingredients") as FormArray).removeAt(index);
  }
 }
