import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import {User}  from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private serviceUrl = 'https://jsonplaceholder.typicode.com/users';

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.serviceUrl);
  }

  createUser(user: User) {
    return this.http.post(this.serviceUrl, JSON.stringify(user) );
  }

  deleteUser(userid: number) {
    return this.http.delete(this.serviceUrl + '/' + userid ).subscribe(
      (response) => {
      console.log(response); }) ;
  }
  getById(userid: number) {
    return this.http.get(this.serviceUrl + '/' + userid ).subscribe(
      (response) => {
      console.log(response); } )  ;
  }

  updateUser(userid: number, user: User) {
    return this.http.put(this.serviceUrl + '/' + userid, JSON.stringify(user)).subscribe(
      (response) => {
      console.log(response); } )  ;
  }

  constructor(private http: HttpClient) {
  }}
