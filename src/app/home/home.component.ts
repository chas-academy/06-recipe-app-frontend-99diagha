import { Component, OnInit, ViewChild } from '@angular/core';

import { Recipe } from '../models/recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.index(0).subscribe(response => {
      this.recipes = response;
    });
  }

  private onFilter({target, payload}) {
    let course;
    let allergens;
    let diets;
    console.log({target, payload});

    switch (target) {
      case 'course':
        course = payload;
        break;
      case 'allergens':
        allergens = payload.join('&allowedAllergy[]=');
        break;
      case 'diets':
        diets = payload.join('&allowedDiet[]=');
        break;
    }

    this.recipeService.index(0, course, allergens, diets).subscribe(response => {
      this.recipes = response;
    });
  }

  private onScroll() {
    const page = this.recipes.length + 1;
    this.recipeService.index(page).subscribe(response => {
      this.recipes = [...this.recipes, ...response];
    });
  }
}
