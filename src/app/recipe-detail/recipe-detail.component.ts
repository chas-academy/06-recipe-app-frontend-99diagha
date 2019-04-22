import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Recipe } from '../models/recipe.model';
import { RecipeService } from '../services/recipe.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  private recipe: Recipe;
  private loggedIn: boolean;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private authService: AuthService) { }

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
        duration: response.totalTimeInSeconds
      });
    });

    this.authService.authStatus.subscribe(value => this.loggedIn = value);
  }
}
