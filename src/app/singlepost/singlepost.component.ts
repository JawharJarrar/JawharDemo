import { Component, OnInit, Input } from '@angular/core';


import { Post } from '../shared/models/post.model';
import { Comment } from '../shared/models/comment.model';
import { PostService } from '../post.service';



@Component({
  selector: 'app-singlepost',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.css']
})
export class SinglepostComponent implements OnInit {

  @Input() post: Post;
  comments: Array<Comment>;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getComments(this.post.id).subscribe(data => {
      this.comments = data;
    });
    console.log(this.comments);

  }

}
