import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  users = [
    { id: 1, email: 'abc@xyz.com', password: '123456' },
    { id: 2, email: 'def@xyz.com', password: '123456' },
    { id: 3, email: 'ghi@xyz.com', password: '123456' }
  ];

  constructor(
    private router : Router
  ) { }


  login(formdata) {
    const selectedUser = this.users.find(user => (user.email === formdata.email) && (user.password === formdata.password));
    if(selectedUser){
      localStorage.setItem('loggedInuser', JSON.stringify(selectedUser));
      return selectedUser;
    } else {
      return null;
    }
  }

  isAuth(){
    return localStorage.getItem('loggedInuser') ? true : false;
  }

  logout(){
    localStorage.removeItem('loggedInuser');
    this.router.navigate(['/login']);
  }

  
}
