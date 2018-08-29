import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommentService } from '../../services/comment.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Comment } from '../../models/comment.model';



@Component({
  selector: 'app-updatecomment',
  templateUrl: './updatecomment.component.html',
  styleUrls: ['./updatecomment.component.css']
})
export class UpdatecommentComponent implements OnInit {



  public comment: Comment = new Comment();
  UpdateCommentForm: FormGroup;



  constructor(private formBuilder: FormBuilder,
                       private router: Router,
                      private dataservice:  DataService,
                      private  commentservice: CommentService ) { }

    ngOnInit() {

      this.UpdateCommentForm = this.formBuilder.group({

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

    onUpdateCommentSubmit() {
      this.comment.id =  this.dataservice.commentid;

    this.commentservice.updateComment( this.dataservice.postid, this.comment );
    this.router.navigate(['/posts/list']);
     }
   }
