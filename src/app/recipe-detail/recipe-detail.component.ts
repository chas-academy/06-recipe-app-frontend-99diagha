import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Recipe } from '../models/recipe.model';
import { RecipeService } from '../services/recipe.service';
import { AuthService } from '../services/auth.service';
import { SavedService } from '../services/saved.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  loggedIn: boolean;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private savedService: SavedService,
              private authService: AuthService) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;

    this.recipeService.show(id).subscribe((response: any) => {
      this.recipe = new Recipe({
        id: response.id,
        title: response.title,
        image: response.image,
        servings: response.servings,
        readyInMinutes: response.readyInMinutes,
        sourceName: response.sourceName,
        sourceUrl: response.sourceUrl,
        ingredients: response.extendedIngredients
      });
    });

    this.authService.authStatus.subscribe(value => this.loggedIn = value);
  }

  onSubmit() {
    this.savedService.store(this.recipe).subscribe();
  }
}
