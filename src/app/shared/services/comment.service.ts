import { Observable } from 'rxjs';
import { Injectable }   from '@angular/core';
import { HttpClient }  from '@angular/common/http';


import { Comment } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private commentsUrl = 'https://jsonplaceholder.typicode.com/comments/';

  constructor(private http: HttpClient) {}

  addComment(comment: Comment) {
    return this.http.post(this.commentsUrl, JSON.stringify(comment)).subscribe(
      (response) => {
      console.log(response + 'comment added to the server'); } )  ;
  }

  getById(commentid: number) {
    return this.http.get(this.commentsUrl + '/' + commentid ).subscribe(
      (response) => {
      console.log(response); } )  ;
  }
  deleteComment(commentid: number) {
    return this.http.delete(this.commentsUrl + '/' + commentid ).subscribe(
      (response) => {
      console.log(response); } )  ;
  }

  updateComment(commentid: number, comment: Comment) {
    return this.http.put(this.commentsUrl + '/' + commentid, JSON.stringify(comment)).subscribe(
      (response) => {
      console.log(response); } )  ;
  }
}
