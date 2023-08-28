import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'This is my first mvc';
  rollnumber='65';
  getrollnumber(){
    return this.rollnumber;
  }
}
