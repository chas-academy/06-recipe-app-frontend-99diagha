import { Component, OnInit } from '@angular/core';
import {Recipe} from '../models/recipe.model';
import {RecipeService} from '../services/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.index().subscribe(response => {
      this.recipes = response;
    });
  }

  onScroll() {
    const page = this.recipes.length + 1;
    this.recipeService.index(page).subscribe(response => {
      this.recipes = this.recipes.concat(response);
    });
  }
}
