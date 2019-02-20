import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  private recipe: Recipe;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private recipeService: RecipeService) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;

    this.recipeService.read(id).subscribe((data: any) => {
      this.recipe = new Recipe({
        id: data.id,
        name: data.name,
        source: {
          displayName: data.source['sourceDisplayName'],
          recipeUrl: data.source['sourceRecipeUrl']
        },
        imageUrl: data.images[0].hostedSmallUrl,
        ingredients: data.ingredientLines,
        servings: data.numberOfServings,
        duration: data.totalTime
      });
    });
  }
}
