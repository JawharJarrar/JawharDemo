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

  deletePost(post: Post) {
    return this.http.delete(this.postsUrl + '/' + post.id ).subscribe()  ;
  }

  addPost(post: Post) {
    console.log('before');
    return this.http.post(this.postsUrl, JSON.stringify(post)).subscribe();
  }

  getById(postid: number) {
    return this.http.get(this.postsUrl + '/' + postid ).subscribe();
  }

  updatePost(postid: number, post: Post) {
    return this.http.put(this.postsUrl + '/' + postid, JSON.stringify(post)).subscribe() ;
  }

  getComments(id: number):  Observable<Comment[]> {
    return this.http.get<Comment[]>(this.postsUrl + id + '/comments');
  }
}
