import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private API_ID = '6efcda6e';
  private API_KEY = '0351e35eebaf3d4ff16220765f73b5c8';

  constructor(private http: HttpClient) { }

  getRecipe(id: string) {
    const headers = new HttpHeaders()
      .set('X-Yummly-App-ID', this.API_ID)
      .set('X-Yummly-App-Key', this.API_KEY);

    return this.http.get('http://api.yummly.com/v1/api/recipe/' + id, {headers})
      .subscribe(response => {
        console.log(response);
      });
  }

  getRecipes(page = '0') {
    const headers = new HttpHeaders()
      .set('X-Yummly-App-ID', this.API_ID)
      .set('X-Yummly-App-Key', this.API_KEY);
    const params = new HttpParams()
      .set('maxResult', '20')
      .set('start', page);

    return this.http.get('http://api.yummly.com/v1/api/recipes', {headers, params});
  }
}
