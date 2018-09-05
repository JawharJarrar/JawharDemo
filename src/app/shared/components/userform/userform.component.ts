import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef  } from '@angular/material';

import { UserService } from '../../services/user.service';
import { DataService } from './../../services/data.service';
import { User } from '../../models/user.model';

@Component({
selector: 'app-userform',
templateUrl: './userform.component.html',
styleUrls: ['./userform.component.scss']
})
export class UserformComponent implements OnInit {
  public user: User = new User();
  public UserForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userservice: UserService,
    private dataservice: DataService,
    public dialogRef: MatDialogRef<UserformComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ,
  ) { }

  ngOnInit() {
    if (this.data.action === 'edit') {
      this.user.name = this.data.name;
      this.user.email = this.data.email;
      this.user.phone = this.data.phone;
      this.user.website = this.data.website;
      this.user.company = this.data.company;
    }
    this.UserForm = this.formBuilder.group({
      'email': [this.user.email, [
        Validators.required,
        Validators.email
      ]],
      'name': [this.user.name, [
        Validators.required,
      ]],
      'phone': [this.user.phone, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
      ]],
      'website': [this.user.website, [
        Validators.required,
        Validators.maxLength(30),
      ]],
    });
  }

  UserSubmit() {
    if (this.data.action === 'edit') {
      this.userservice.updateUser(this.dataservice.userid, this.user);
      this.user.id = this.dataservice.userid ;
      this.dialogRef.close(this.user);
        } else {
      this.userservice.createUser(this.user);
      this.dialogRef.close(this.user);
    }
  }
}
