import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-blog';
  memberData=[
    {
      name:"Azhar",
      email:"azhar@test.com"
    },
    {
      name:"Sam",
      email:"sam@test.com"
    },
    {
      name:"Jhon",
      email:"jhon@test.com"
    },
    {
      name:"Rahul",
      email:"Rahul@test.com"
    },
  ]
}
