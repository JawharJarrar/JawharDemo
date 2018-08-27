import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import {User}  from './shared/models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private serviceUrl = 'https://jsonplaceholder.typicode.com/users';


  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.serviceUrl);
  }

  createUser(user: User) {
    return this.http.post(this.serviceUrl, user);
  }

  deleteUser(user: any) {
    return this.http.delete(this.serviceUrl, user.id);
  }


  constructor(private http: HttpClient) {
  }}
