import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  // simple loop array
  // users = ['Azhar', 'Anas', 'Shoaib'];
  users = [
    {
      name: 'Azhar',
      conact: 22323,
      email: 'abc@abc.com',
    },
    {
      name: 'Anas',
      conact: 7878,
      email: 'cbd@abc.com',
    },
    {
      name: 'Shoaib',
      conact: 8970,
      email: 'vbd@abc.com',
    },
  ];
}
