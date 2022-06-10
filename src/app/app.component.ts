import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  count = 0;
  // CounterData(){
  //   this.count++
  // }
  // DecreaseData(){
  //   this.count--
  // }

  CounterData(type:string){
    type==='increase'?this.count++:this.count--
  }

}
