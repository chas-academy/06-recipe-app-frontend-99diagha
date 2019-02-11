import { Component, OnInit } from '@angular/core';

import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  private recipes: [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.getRecipes().subscribe((response: any) => {
      this.recipes = response.matches;
    });
  }
}
