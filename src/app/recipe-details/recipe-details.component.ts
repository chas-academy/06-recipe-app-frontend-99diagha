import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Recipe } from '../models/recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  private recipe: Recipe;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;

    this.recipeService.read(id).subscribe((response: any) => {
      this.recipe = new Recipe({
        id: response.id,
        name: response.name,
        source: {
          displayName: response.source['sourceDisplayName'],
          recipeUrl: response.source['sourceRecipeUrl']
        },
        imageUrl: response.images[0].hostedSmallUrl,
        ingredients: response.ingredientLines,
        servings: response.numberOfServings,
        duration: response.totalTime
      });
    });
  }
}
