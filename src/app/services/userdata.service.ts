import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserdataService {
  constructor() {}
  // userData=[
  //   {
  //     name:"Azhar",
  //     email:"azhar@test.com"
  //   },
  //   {
  //     name:"Sam",
  //     email:"sam@test.com"
  //   },
  //   {
  //     name:"Jhon",
  //     email:"jhon@test.com"
  //   },
  //   {
  //     name:"Rahul",
  //     email:"Rahul@test.com"
  //   },
  // ]

  users() {
    return [
      {
        name: 'Azhar',
        age: 22,
        email: 'azhar@test.com',
      },
      {
        name: 'sam',
        age: 21,
        email: 'sam@test.com',
      },
      {
        name: 'Riya',
        age: 20,
        email: 'riya@test.com',
      },
      {
        name: 'Jhon',
        age: 24,
        email: 'jhon@test.com',
      },
    ];
  }
}
