import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../services.service';


@Component({
  selector: 'app-registerscreen',
  templateUrl: './registerscreen.component.html',
  styleUrls: ['./registerscreen.component.css']
})
export class RegisterscreenComponent {
  username: string = '';
  password: string = '';
  email: string = '';
  constructor(private router: Router, private authService: AuthService) {}

  onSignupSuccess() {  
    this.router.navigate(['/login']); 
  }
  register() {
    this.authService.register(this.username, this.password, this.email).subscribe(
      (response) => {
        // Registration successful
        // You can handle the response or navigate to another page here
      },
      (error) => {
        // Handle registration error, e.g., show an error message
        console.error('Registration error:', error);
      }
    );
  }
}
