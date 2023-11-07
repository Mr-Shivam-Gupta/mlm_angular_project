import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerscreen',
  templateUrl: './registerscreen.component.html',
  styleUrls: ['./registerscreen.component.css']
})
export class RegisterscreenComponent {
  constructor(private router: Router) {}

  onSignupSuccess() {  
    this.router.navigate(['/login']); 
  }
}
