import { Component, OnInit, Inject } from '@angular/core';

import { UserService } from '../../services/user.service';
import { DataService } from './../../services/data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef  } from '@angular/material';
import { User } from '../../models/user.model';

@Component({
selector: 'app-userform',
templateUrl: './userform.component.html',
styleUrls: ['./userform.component.scss']
})
export class UserformComponent implements OnInit {

  public x: User = new User();
  UserForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
          private userservice: UserService,
          private dataservice: DataService,
          public dialogRef: MatDialogRef<UserformComponent>,
          @Inject(MAT_DIALOG_DATA) public data: any ,
  ) { }

  ngOnInit() {
    if (this.data.action === 'edit') {
      this.x.name = this.data.name;
      this.x.email = this.data.email;
      this.x.phone = this.data.phone;
      this.x.website = this.data.website;
      this.x.company = this.data.company;
    }
    this.UserForm = this.formBuilder.group({
      'email': [this.x.email, [
        Validators.required,
        Validators.email
      ]],
      'name': [this.x.name, [
        Validators.required,
      ]],
      'phone': [this.x.phone, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
      ]],
      'website': [this.x.website, [
        Validators.required,
        Validators.maxLength(30),
      ]],
    });
  }

  UserSubmit() {
    if (this.data.action === 'edit') {
      this.userservice.updateUser(this.dataservice.userid, this.x);
      this.x.id = this.dataservice.userid ;
      this.dialogRef.close(this.x);
        } else {
      this.userservice.createUser(this.x);
      this.dialogRef.close(this.x);
    }
  }
}
