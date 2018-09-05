import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { PostService } from '../shared/services/post.service';
import { PostformComponent } from '../shared/components/postform/postform.component';
import { Post } from '../shared/models/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  public  posts: Array<Post>;
  constructor(private postService: PostService, public dialog: MatDialog) { }

  ngOnInit() {
    this.postService.getAll().subscribe(data => {
    this.posts = data;
    });
  }

  AddPost() {
    const dialogRef = this.dialog.open(PostformComponent,  {
      data: {  action: 'add'}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.posts.push(result);
    });
  }
}
