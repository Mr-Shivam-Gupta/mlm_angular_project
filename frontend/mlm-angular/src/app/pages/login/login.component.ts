import { AuthService } from './../../services.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) {} // Inject the Router service here

  onSignupSuccess() {
    this.router.navigate(['/signup']); // Corrected function body with curly braces
  }

  username: string = '';
  password: string = '';
  rememberMe: boolean = false;

  login() {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        // Authentication successful
        // You can handle the response or navigate to another page here
      },
      (error) => {
        // Handle authentication error, e.g., show an error message
        console.error('Authentication error:', error);
      }
    );
  }
}