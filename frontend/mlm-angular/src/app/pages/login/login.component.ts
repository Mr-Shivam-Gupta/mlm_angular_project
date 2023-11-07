import { AuthService } from './../../services.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


 

  constructor(private authService: AuthService) {}
  onSignupSuccess() {  
    this.router.navigate(['/signup']); 
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
>>>>>>> 9e0ac5a34d4580ed3818c8e969a52707f6b4ee50
  }
}
