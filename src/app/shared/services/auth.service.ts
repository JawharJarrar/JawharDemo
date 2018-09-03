import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login() {
    localStorage.setItem('token', 'fake login token');
  }

  register() {
    localStorage.setItem('token', 'fake register token');
  }

  logout() {
    localStorage.removeItem('token');
  }
  IsLoggedin() {
   const token = localStorage.getItem('token');
   if  (!token) {
     return false;
   }
   return true;
  }
}
