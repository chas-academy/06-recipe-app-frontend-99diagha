import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  name: string;
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
    this.authService.signup(this.name, this.email, this.password).subscribe(response => {
      this.router.navigate(['/signin']);
    }, error => {
      console.log(error);
      this.loading = false;
    });
  }
}

