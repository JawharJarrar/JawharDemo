import { Observable } from 'rxjs';
import { Injectable }   from '@angular/core';
import { HttpClient }  from '@angular/common/http';


import { Post }          from './shared/models/post.model';
import { Comment } from './shared/models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts/';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }

 getComments(id: Float32Array):  Observable<Comment[]> {
    return this.http.get<Comment[]>(this.postsUrl + id + '/comments');
  }
}
