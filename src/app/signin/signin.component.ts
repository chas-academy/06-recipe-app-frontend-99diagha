import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  email: string;
  password: string;
  loading = false;
  submitted = false;

  constructor(private router: Router,
              private authService: AuthService) {
    if (this.authService.isSignedIn()) {
      this.router.navigate(['/']);
    }
  }

  onSubmit() {
    this.submitted = true;
    this.loading = true;
    this.authService.signin(this.email, this.password).subscribe(response => {
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.loading = false;
      });
  }
}
