import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA,  MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { PostService } from '../../services/post.service';
import { DataService } from '../../services/data.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-postform',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.scss']
})
export class PostformComponent implements OnInit {
  public post: Post = new Post();
  public userid: number;
  PostForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService,
    private dataservice: DataService,
    public dialogRef: MatDialogRef<PostformComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ,
  ) {}

  ngOnInit() {
    if (this.data.action === 'edit') {
          this.post.title = this.data.title;
            this.post.body = this.data.body;
    }
    this.PostForm = this.formBuilder.group({
      'title': [this.post.title, [
        Validators.required,
      ]],
      'body': [this.post.body, [
        Validators.required,
        Validators.minLength(6),
      ]],
    });
  }

  PostSubmit() {
    if (this.data.action === 'edit') {
      this.postService.updatePost(this.dataservice.postid, this.post);
      this.dialogRef.close(this.post);
    } else {
      this.postService.addPost( this.post);
      this.dialogRef.close(this.post);
    }
  }
}
