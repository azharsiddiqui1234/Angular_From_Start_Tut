import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  newList:any[]=[]
  addTask(item:string){
    this.newList.push({id:this.newList.length,name:item})
    console.log(this.newList);    
  }

  delete(id:number){
    console.log(id);
    this.newList=this.newList.filter((item)=>{
      return(
        item.id!==id
      )
    }
    )
    
  }
}
