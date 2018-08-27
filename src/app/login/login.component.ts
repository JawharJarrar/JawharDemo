import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { Signup } from '../shared/models/signup.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user : Signup = new Signup();
   loginForm : FormGroup;
  hide = true;

  router: Router;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({

      'email': [this.user.email, [
        Validators.required,
        Validators.email
      ]],


      'password': [this.user.password, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]]
    });
  }

  onLoginSubmit() {
    //alert("heyy done Mr"+this.user.username+"you're now logged in");
   // this.router.navigate['posts/list']

  }

}