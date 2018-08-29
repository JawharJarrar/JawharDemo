import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommentService } from '../../services/comment.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Comment } from '../../models/comment.model';



@Component({
  selector: 'app-addcomment',
  templateUrl: './addcomment.component.html',
  styleUrls: ['./addcomment.component.css']
})
export class AddcommentComponent implements OnInit {

  public comment: Comment = new Comment();
  AddCommentForm: FormGroup;

 constructor(private formBuilder: FormBuilder,
                       private router: Router,
                      private dataservice:  DataService,
                      private  commentservice: CommentService ) { }

    ngOnInit() {

      this.AddCommentForm = this.formBuilder.group({

        'name': [this.comment.name, [
          Validators.required,
        ]],
        'body': [this.comment.body, [
          Validators.required,
        ]],
        'email': [this.comment.body, [
          Validators.required,
          Validators.email,
        ]]
      });
    }

    onaddCommentSubmit() {
    this.comment.id = this.dataservice.postid;
    this.commentservice.addComment(this.comment);
    this.router.navigate(['/posts/list']);
     }
   }
