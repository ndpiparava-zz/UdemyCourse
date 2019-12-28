import { NgModule } from "@angular/core";
import { AlertComponent } from "./alert/alert.component";
import { LoadingSpinner } from "./LoadingSpinner/loading-spinner.component";
import { Placeholder } from "@angular/compiler/src/i18n/i18n_ast";
import { DropdownDirective } from "./dropdown.directive";
import { CommonModule } from "@angular/common";
import { PlaceholderDirective } from './Helper/placeholder.directive';

@NgModule({
  declarations: [
    AlertComponent,
    LoadingSpinner,
    PlaceholderDirective,
    DropdownDirective
  ],
  imports: [CommonModule],
  exports: [
    AlertComponent,
    LoadingSpinner,
    PlaceholderDirective,
    DropdownDirective,
    CommonModule
  ],
  entryComponents: [AlertComponent]
})
export class SharedModule {}
