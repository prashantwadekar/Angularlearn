import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loggedIn: boolean = false; // A property to track login status
  loggedInUsername: string = ''; // Store the logged-in username

  onSubmit() {
    // In a real application, implement authentication logic here
    console.log('Username:', this.username);
    console.log('Password:', this.password);
        
    this.loggedIn = true;
    this.loggedInUsername = this.username;

  }
}
