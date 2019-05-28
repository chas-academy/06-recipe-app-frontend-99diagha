import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(this.isValid());
  authStatus = this.loggedIn.asObservable();

  constructor(private http: HttpClient) { }

  register(data) {
    return this.http.post('http://68.183.67.163/api/register', data);
  }

  login(data) {
    return this.http.post('http://68.183.67.163/api/login', data).pipe(
      tap(response => {
        this.setSession(response);
        this.changeAuthStatus(true);
      }));
  }

  logout() {
    const accessToken = localStorage.getItem('access_token');
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + accessToken);

    return this.http.get('http://68.183.67.163/api/logout', {headers}).subscribe(() => {
      this.removeSession();
      this.changeAuthStatus(false);
    });
  }

  private setSession(response) {
    const expiresAt = moment(response.expires_at);
    localStorage.setItem('access_token', response.access_token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  private removeSession() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('expires_at');
  }

  private changeAuthStatus(value: boolean) {
    this.loggedIn.next(value);
  }

  isValid() {
    return moment().isBefore(this.getExpiration());
  }

  private getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
