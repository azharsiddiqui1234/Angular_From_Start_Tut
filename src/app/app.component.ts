import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  name= "Hello Azhar Aminoddin Sayyed"
  className = "active"
  callData(){
    this.name = "Hello Azhar welcome to the Angular"
  }

  changeClassName(){
    this.className="remove"
  }
}
