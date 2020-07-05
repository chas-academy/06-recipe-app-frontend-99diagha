import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private API_KEY = '942cd72adc4048ce8c9195dccf04bcae';

  constructor(private http: HttpClient) {}

  show(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${this.API_KEY}`);
  }

  index(page, course = '', allergens = '', diets = ''): Observable<Recipe[]> {
    return this.http.get(`https://api.spoonacular.com/recipes/complexSearch?type=${course}&intolerances=${allergens}&diet=${diets}&offset=${page}&number=20&apiKey=${this.API_KEY}`).pipe(
      map((response: any) =>
        response.results.map((recipe: any) =>
          new Recipe({
            id: recipe.id,
            title: recipe.title,
            image: recipe.image
          })
        )
      ));
  }
}
