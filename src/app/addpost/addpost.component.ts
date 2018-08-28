import { Component, OnInit } from '@angular/core';


import { PostService } from './../shared/services/post.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Post } from '../shared/models/post.model';


@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {

public post: Post = new Post();
AddPostForm: FormGroup;



constructor(private formBuilder: FormBuilder, private router: Router, private postservice: PostService ) { }
addPost() {

  }
  ngOnInit() {

    this.AddPostForm = this.formBuilder.group({

      'title': [this.post.title, [
        Validators.required,
      ]],


      'body': [this.post.body, [
        Validators.required,

      ]]
    });
  }

onaddPostSubmit() {
  this.postservice.addPost(this.post);
  this.router.navigate(['/posts/list']);
   }
 }
