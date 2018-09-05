import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA,  MatDialogRef } from '@angular/material';

import { CommentService } from '../../services/comment.service';
import { DataService } from '../../services/data.service';
import { Comment } from '../../models/comment.model';

@Component({
  selector: 'app-commentform',
  templateUrl: './commentform.component.html',
  styleUrls: ['./commentform.component.scss']
})
export class CommentformComponent implements OnInit {
  public comment: Comment = new Comment();
  Commentform: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private dataservice:  DataService,
    private  commentservice: CommentService,
    public dialogRef: MatDialogRef<CommentformComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit() {
    if (this.data.action === 'edit') {
      this.comment.email = this.data.email;
      this.comment.name = this.data.name;
      this.comment.body = this.data.body;
    }
    this.Commentform = this.formBuilder.group({
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

  CommentSubmit() {
     if (this.data.action === 'edit') {
        this.comment.id =  this.dataservice.commentid;
        this.commentservice.updateComment( this.dataservice.postid, this.comment );
        this.dialogRef.close(this.comment);
    } else {
        this.comment.postId = this.dataservice.postid;
        this.data.comm = this.comment ;
        this.commentservice.addComment(this.comment);
        this.dialogRef.close(this.comment);
      }
  }
}
