import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from "./models/Post.model";
import { Comment } from "./models/Comment.model";

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts/';


  
  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }
  getComments(id:Float32Array): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.postsUrl+id+'/comments');
  }

  constructor(private http: HttpClient) {
  }}
