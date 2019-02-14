import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  private recipe: [];

  constructor(private route: ActivatedRoute,
              private location: Location,
              private recipeService: RecipeService) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;

    this.recipeService.getRecipe(`${id}`).subscribe((response: any) => {
      this.recipe = response;
    });
  }
}
