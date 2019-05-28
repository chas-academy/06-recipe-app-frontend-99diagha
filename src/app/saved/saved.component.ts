import { Component, OnInit } from '@angular/core';

import { Recipe } from '../models/recipe.model';
import { SavedService } from '../services/saved.service';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.scss']
})
export class SavedComponent implements OnInit {
  recipes: Recipe[];

  constructor(private savedService: SavedService) { }

  ngOnInit() {
    this.savedService.index().subscribe(response => {
      this.recipes = response;
    });
  }
}
