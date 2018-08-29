import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from '../../models/post.model';
import { Comment } from '../../models/comment.model';
import { PostService } from '../../services/post.service';
import { DataService } from './../../services/data.service';
import { AddcommentComponent } from '../addcomment/addcomment.component';
import { UpdatecommentComponent } from '../updatecomment/updatecomment.component';
import { CommentService } from './../../services/comment.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-singlepost',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.css']
})
export class SinglepostComponent implements OnInit {

  @Input() post: Post;
  comments: Array<Comment>;
  constructor(private postService: PostService,
                      private dataService: DataService,
                      private router: Router,
                      public dialog: MatDialog,
                      public commentservice: CommentService
                    ) { }
  deletePost(postid: number) {
   if ( confirm('sure you want to remove this post ?' )) {
      this.postService.deletePost(postid);
   }
  }
  deleteComment(commentid: number) {
    if ( confirm('sure you want to remove this comment ?' )) {
      this.commentservice.deleteComment(commentid);  }
  }
  UpdatePost(id: number) {
    this.dataService.postid = id;
    this.router.navigate(['updatePost']);
  }

  AddComment(postid: number) {
  this.dataService.postid = postid;
    this.dialog.open(AddcommentComponent);
  }
  editComment(postid: number, commentid: number) {
    this.dataService.postid = postid;
    this.dataService.commentid = commentid;
    this.dialog.open(UpdatecommentComponent);
 }

  ngOnInit() {
    this.postService.getComments(this.post.id).subscribe(data => {
      this.comments = data;
    });
    console.log(this.comments);

  }

}
