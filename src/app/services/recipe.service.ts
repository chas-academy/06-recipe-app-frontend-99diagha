import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Recipe } from '../models/recipe.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private API_ID = '6efcda6e';
  private API_KEY = '0351e35eebaf3d4ff16220765f73b5c8';

  constructor(private http: HttpClient) { }

  read(id: number): Observable<Recipe> {
    const headers = new HttpHeaders()
      .set('X-Yummly-App-ID', this.API_ID)
      .set('X-Yummly-App-Key', this.API_KEY);

    return this.http.get<Recipe>(`http://api.yummly.com/v1/api/recipe/${id}`, {headers});
  }

  list(page = 0): Observable<Recipe[]> {
    const headers = new HttpHeaders()
      .set('X-Yummly-App-ID', this.API_ID)
      .set('X-Yummly-App-Key', this.API_KEY);
    const params = new HttpParams()
      .set('requirePictures', 'true')
      .set('maxResult', '20')
      .set('start', page.toString());

    return this.http.get('http://api.yummly.com/v1/api/recipes', {headers, params}).pipe(
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
