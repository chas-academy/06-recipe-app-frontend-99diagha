import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  loggedIn: boolean;

  constructor(private router: Router,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.authStatus.subscribe(value => this.loggedIn = value);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
