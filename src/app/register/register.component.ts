import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  private form = {
    email: null,
    name: null,
    password: null,
    password_confirmation: null
  };
  private error = [];

  constructor(private router: Router,
              private authService: AuthService) {
  }

  onSubmit() {
    this.authService.register(this.form).subscribe(() => {
      this.router.navigate(['/login']);
    }, error => {
      this.error = error.error.errors;
    });
  }
}

