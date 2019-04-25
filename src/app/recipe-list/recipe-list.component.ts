import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  @Input() private recipes: Recipe[];
  @Output() private scrolled = new EventEmitter();

  constructor() { }
}
