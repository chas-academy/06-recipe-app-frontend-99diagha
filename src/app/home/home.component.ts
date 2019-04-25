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
  private course: string;
  private allergens: string;
  private diets: string;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.index(0).subscribe(response => {
      this.recipes = response;
    });
  }

  private onFilter({target, payload}) {
    switch (target) {
      case 'course':
        this.course = payload;
        break;
      case 'allergens':
        this.allergens = payload.join('&allowedAllergy[]=');
        break;
      case 'diets':
        this.diets = payload.join('&allowedDiet[]=');
        break;
    }

    this.recipeService.index(0, this.course, this.allergens, this.diets).subscribe(response => {
      this.recipes = response;
    });
  }

  private onScroll() {
    const page = this.recipes.length + 1;
    this.recipeService.index(page, this.course, this.allergens, this.diets).subscribe(response => {
      this.recipes = [...this.recipes, ...response];
    });
  }
}
