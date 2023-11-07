import { AuthService } from './../../services.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  rememberMe: boolean = false;

  constructor(private authService: AuthService) {}

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
