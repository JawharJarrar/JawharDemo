import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PostService } from './../shared/services/post.service';
import { DataService } from './../shared/services/data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Post } from '../shared/models/post.model';
@Component({
  selector: 'app-updatepost',
  templateUrl: './updatepost.component.html',
  styleUrls: ['./updatepost.component.css']
})
export class UpdatepostComponent implements OnInit {
  public post: Post = new Post();
  public userid: number;
UpdatePostForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
                      private router: Router,
                      private postService: PostService,
                      private dataservice: DataService ) { }

  ngOnInit() {
     const postId = this.dataservice.postid;
    if (!postId) {
      alert('Invalid action.');
      this.router.navigate(['user/list']);
      return;
    }
   this.UpdatePostForm = this.formBuilder.group({

    'title': [this.post.title, [
      Validators.required,
    ]],
    'body': [this.post.body, [
      Validators.required,
      Validators.minLength(6),

    ]],
  });
}
onUpdatePostSubmit() {
  this.postService.updatePost(this.dataservice.postid, this.post);
  this.router.navigate(['/posts/list']);

}


}
