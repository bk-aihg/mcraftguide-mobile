import { Component } from '@angular/core';

import { AppDataProvider } from '../../providers/app-data/app-data'

/**
 * Generated class for the CraftingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'crafting',
  templateUrl: 'crafting.html'
})
export class CraftingComponent {

  items = [];
  errorMessage;
  childItems = [];
  showChild;

  constructor(public dataService: AppDataProvider) {
    this.loadItems();
  }

  loadItems(){
    this.dataService.getCraftItems()
      .subscribe(items => this.items = items);
  }

  toggleChild(child){
    var id = 'parent-'+child.itemId;
    var c = document.getElementById(id)
    var d = c.getElementsByClassName("childNode");

    for (var i = 0; i < d.length; i++) {

    }

  }
}
