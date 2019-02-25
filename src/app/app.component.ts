import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router,
              private authService: AuthService) { }

  isSignedIn() {
    return this.authService.isSignedIn();
  }

  signout() {
    console.log('hi');
    this.authService.signout();
    this.router.navigate(['/']);
  }
}
