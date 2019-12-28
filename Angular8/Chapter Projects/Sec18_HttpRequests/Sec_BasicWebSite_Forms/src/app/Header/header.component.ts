import { Component, Output, EventEmitter } from "@angular/core";
import { DataStorageService } from '../Shared/data-storage.service';



@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();
  collapsed = true;

  constructor(private dataStorageService: DataStorageService) {}

  onNavMenuSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
      this.dataStorageService.fetchRecipes().subscribe();
  }
}