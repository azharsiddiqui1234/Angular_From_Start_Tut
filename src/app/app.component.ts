import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  display = true
  hideElement(){
    this.display=false
  }
  showElement(){
    this.display=true
  }

  toggleElement(){
    this.display=!this.display
  }
}
