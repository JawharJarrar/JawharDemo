import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {User}  from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private serviceUrl = 'https://jsonplaceholder.typicode.com/users/';
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.serviceUrl);
  }

  createUser(user: User) {
    return this.http.post(this.serviceUrl, JSON.stringify(user) ).subscribe();
  }

  deleteUser(user: User) {
    return this.http.delete(this.serviceUrl + '/' + user.id ).subscribe() ;
  }

  getById(userid: number) {
    return this.http.get(this.serviceUrl + '/' + userid ).subscribe()  ;
  }

  updateUser(userid: number, user: User) {
    return this.http.put(this.serviceUrl + '/' + userid, JSON.stringify(user)).subscribe()  ;
  }
}
