import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  data =
    'What is pipes ye hamare data ko ek form se dusre form me transfer krta h, we only use in pipes in html file we can not use pipes in typescript file';
  today = Date()
  
}
