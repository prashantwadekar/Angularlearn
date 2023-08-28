import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  // Inside LoginComponent class

isAuthenticated: boolean = false;
onSubmit() {
  this.isAuthenticated = true;
}
  
goToDashboard() {
  this.router.navigate(['/dashboard']);
}
 }
