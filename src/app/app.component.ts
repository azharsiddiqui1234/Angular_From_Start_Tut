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
      email: [
        {
          personal_email: 'abc@abc.com',
          work_email: 'azh@abc.com',
        },
      ],
    },
    {
      name: 'Anas',
      conact: 7878,
      email: [
        {
          personal_email: 'cbd@abc.com',
          work_email: 'ancs@abc.com',
        },
      ],
    },
    {
      name: 'Shoaib',
      conact: 8970,
      email: [
        {
          personal_email: 'vbd@abc.com',
          work_email: 'shb@abc.com',
        },
      ],
    },
  ];
}
