import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(name: string, email: string, password: string) {
    const body = {
      name,
      email,
      password
    };
    return this.http.post('http://homestead.test/api/signup', body);
  }

  signin(email: string, password: string) {
    const body = {
      email,
      password
    };
    return this.http.post('http://homestead.test/api/signin', body).pipe(
      tap(response => this.setSession(response)));
  }

  private setSession(response) {
    const expiresAt = moment(response.expires_at);

    localStorage.setItem('access_token', response.access_token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  signout() {
    const accessToken = localStorage.getItem('access_token');

    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + accessToken);

    return this.http.get('http://homestead.test/api/signout', {headers}).pipe(
      tap(() => this.removeSession())).subscribe();
  }

  private removeSession() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('expires_at');
  }

  isSignedIn() {
    return moment().isBefore(this.getExpiration());
  }

  private getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
