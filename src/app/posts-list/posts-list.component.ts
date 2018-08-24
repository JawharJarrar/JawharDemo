import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from "../models/post.model";

@Component({
  selector: 'app-posts',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts: Array<Post>;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getAll().subscribe(data => {
      this.posts = data;
    });
  }
}