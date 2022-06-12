import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  userDetails = [
    {
      name: 'anil sidhu',
      email: 'anil@abc.com',
    },
    {
      name: 'Richa Agrwaal',
      email: 'richa@test.com',
    },
    {
      name: 'jhon doe',
      email: 'jhon@reb.com',
    },
    {
      name: 'jack sparrow',
      email: 'jack@car.com',
    },
  ];
}
