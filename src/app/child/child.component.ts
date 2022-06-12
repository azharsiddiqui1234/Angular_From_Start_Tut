import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  // default value we have to import Input from @angular/core 
  @Input() data=0;
  ngOnInit(): void {
  }

}
