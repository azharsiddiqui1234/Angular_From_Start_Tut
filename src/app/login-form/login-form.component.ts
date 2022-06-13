import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
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
    // user:new FormControl('',[Validators.required,Validators.email]),
    user:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)])
  })

  loginUser(){
    console.log(this.loginForm.value);
  }

  get user(){
    return(
      this.loginForm.get('user')
    )
  }

  get password(){
    return(
      this.loginForm.get('password')
    )
  }
}
