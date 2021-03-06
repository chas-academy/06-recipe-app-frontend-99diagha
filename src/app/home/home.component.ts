import { Component, OnInit, ViewChild } from '@angular/core';

import { Recipe } from '../models/recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  recipes: Recipe[];
  course: string;
  allergens: string;
  diets: string;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.index(0).subscribe(response => {
      this.recipes = response;
    });
  }

  onFilter({target, payload}) {
    switch (target) {
      case 'course':
        this.course = payload;
        break;
      case 'allergens':
        this.allergens = payload.join(',');
        break;
      case 'diets':
        this.diets = payload.join(',');
        break;
    }

    this.recipeService.index(0, this.course, this.allergens, this.diets).subscribe(response => {
      this.recipes = response;
    });
  }

  onScroll() {
    const page = this.recipes.length + 1;
    console.log(page)
    this.recipeService.index(page, this.course, this.allergens, this.diets).subscribe(response => {
      this.recipes = [...this.recipes, ...response];
    });
  }
}
