import { Component, OnInit } from '@angular/core';


import { UserService } from './../shared/services/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../shared/models/user.model';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

public user: User = new User();
AddUserForm: FormGroup;



constructor(private formBuilder: FormBuilder, private router: Router, private userservice: UserService ) { }
addPost() {

  }
  ngOnInit() {

    this.AddUserForm = this.formBuilder.group({

      'email': [this.user.email, [
        Validators.required,
        Validators.email
      ]],


      'phone number': [this.user.phone, [
        Validators.required,
        Validators.pattern('[0-9]+'),
        Validators.minLength(6),
        Validators.maxLength(30)
      ]]
    });
  }

onLoginSubmit() {
  this.userservice.createUser(this.user);
  this.router.navigate(['/user/list']);
   }
 }
