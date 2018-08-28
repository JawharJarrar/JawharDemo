import { Observable } from 'rxjs';
import { Injectable }   from '@angular/core';
import { HttpClient }  from '@angular/common/http';


import { Post }          from '../models/post.model';
import { Comment } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts/';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }

  deletePost(postid: number) {
    return this.http.delete(this.postsUrl + '/' + postid ).subscribe(
      (response) => {
      console.log(response + 'deleting from da server'); } )  ;

  }
  addPost(post: Post) {
    return this.http.post(this.postsUrl, JSON.stringify(post)).subscribe(
      (response) => {
      console.log(response + 'post added to the server'); } )  ;
  }
  updatePost(post: Post) {
    return this.http.put(this.postsUrl + '/' + post.id, JSON.stringify(post)).subscribe(
      (response) => {
      console.log(response + 'post updated to the server'); } )  ;
  }

  getComments(id: Float32Array):  Observable<Comment[]> {
    return this.http.get<Comment[]>(this.postsUrl + id + '/comments');
  }
}
