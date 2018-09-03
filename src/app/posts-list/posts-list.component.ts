import { Component, OnInit } from '@angular/core';

import { PostService } from '../shared/services/post.service';
import { PostformComponent } from '../shared/components/postform/postform.component';
import { Post } from '../shared/models/post.model';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-posts',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  posts: Array<Post>;
  constructor(private postService: PostService, public dialog: MatDialog,
  ) { }

  AddPost() {
    const dialogRef = this.dialog.open(PostformComponent,  {
      data: {  action: 'add'}
    });
    dialogRef.afterClosed().subscribe(result => {
      const index = this.posts.indexOf(result);
      this.posts.push(result);
    });
  }

  ngOnInit() {
    this.postService.getAll().subscribe(data => {
    this.posts = data;
    });
  }
}
