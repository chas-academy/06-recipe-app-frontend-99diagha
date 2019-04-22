import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private form = {
    email: null,
    password: null,
  };
  private error = [];

  constructor(private router: Router,
              private authService: AuthService) {
  }

  onSubmit() {
    this.authService.login(this.form).subscribe(() => {
        this.router.navigate(['/']);
      }, error => {
        this.error = error.error.errors;
      });
  }
}
