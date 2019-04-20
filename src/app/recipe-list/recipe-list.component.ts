import { Component, OnInit } from '@angular/core';

import { Recipe } from '../models/recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  private recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.list().subscribe(response => {
      this.recipes = response;
    });
  }

  onScroll() {
    const page = this.recipes.length + 1;
    this.recipeService.list(page).subscribe(response => {
      this.recipes = this.recipes.concat(response);
    });
  }
}
