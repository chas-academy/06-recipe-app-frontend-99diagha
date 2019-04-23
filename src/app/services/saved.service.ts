import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class SavedService {
  private headers;

  constructor(private http: HttpClient) {
    const accessToken = localStorage.getItem('access_token');
    this.headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + accessToken);
  }

  index(): Observable<Recipe[]> {
    return this.http.get('http://homestead.test/api/saved', {headers: this.headers}).pipe(
      map((response: any) =>
        response.map((recipe: any) =>
          new Recipe({
            id: recipe.yummly_id,
            name: recipe.name,
            source: {
              displayName: recipe.source,
              recipeUrl: ''
            },
            imageUrl: recipe.image
          })
        )
      ));
  }

  store(recipe: Recipe) {
    const { id, name, imageUrl, source } = recipe;
    return this.http.post('http://homestead.test/api/saved', {id, name, imageUrl, source}, {headers: this.headers});
  }
}
