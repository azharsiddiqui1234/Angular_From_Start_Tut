import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  color = '#f2f2f2';
  bgColor = "green";

  updateColor(){
    this.color = 'red'
    this.bgColor = "yellow"
  }
}
