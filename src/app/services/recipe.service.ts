import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private API_ID = '6efcda6e';
  private API_KEY = '0351e35eebaf3d4ff16220765f73b5c8';
  private headers;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders()
      .set('X-Yummly-App-ID', this.API_ID)
      .set('X-Yummly-App-Key', this.API_KEY);
  }

  show(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`http://api.yummly.com/v1/api/recipe/${id}`, {headers: this.headers});
  }

  index(page, course = '', allergens = '', diets = ''): Observable<Recipe[]> {
    return this.http.get(`http://api.yummly.com/v1/api/recipes?requirePictures=true&maxResult=20&start=${page}&allowedCourse[]=${course}&allowedAllergy[]=${allergens}&allowedDiet[]=${diets}`, {headers: this.headers}).pipe(
      map((response: any) =>
        response.matches.map((recipe: any) =>
          new Recipe({
            id: recipe.id,
            name: recipe.recipeName,
            source: {
              displayName: recipe.sourceDisplayName,
              recipeUrl: ''
            },
            imageUrl: recipe.smallImageUrls[0]
          })
        )
      ));
  }
}
