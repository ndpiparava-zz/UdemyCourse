import { NgModule } from "@angular/core";
import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { ShoppingListRoutingModule } from "./shopping-list.routing.module";
import { SharedModule } from '../shared/shared.module';
import { LoggingDummyService } from '../logging.service';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [RouterModule, FormsModule, ShoppingListRoutingModule, SharedModule],
})
export class ShoppingListModule {}
