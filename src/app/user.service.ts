import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User}  from './models/user.model';


import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private serviceUrl = 'https://jsonplaceholder.typicode.com/users';


  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.serviceUrl);
  }
  

  constructor(private http: HttpClient) {
  }}
