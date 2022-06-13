import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }
  

  loginForm = new FormGroup({
    user:new FormControl(''),
    password:new FormControl('')
  })

  loginUser(){
    console.log(this.loginForm.value);
  }
}
