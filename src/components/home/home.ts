import { Component } from '@angular/core';

/**
 * Generated class for the HomeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomeComponent {

  constructor() {
  }

  navigation = [{
    'id': '1',
    'name': 'Crafting',
    'image': 'crafting.jpeg',
    'router': 'crafting'
  },{
    'id': '2',
    'name': 'Blog Post',
    'image': 'blog.jpeg',
    'router': 'blog'
  },{
    'id': '3',
    'name': 'Coming Soon',
    'image': 'comingSoon.jpeg',
    'router': 'http://google.com'
  },{
    'id': '4',
    'name': 'Coming Soon',
    'image': 'comingSoon.jpeg',
    'router': 'http://google.com'
  }];

}
