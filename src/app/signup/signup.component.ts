import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { Signup } from "../models/signup.model";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private signup : Signup = new Signup();
   signupForm : FormGroup;
  hide = true;


    router: Router;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.signupForm = this.formBuilder.group({
     
      'email': [this.signup.email, [
        Validators.required,
        Validators.email
      ]],
      'username': [this.signup.username, [
        Validators.required,
      ]],
      
      'password': [this.signup.password, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]]
    });
  }

  onRegisterSubmit() {
    alert("heyy done Mr"+this.signup.username+"you're have created an account");
    //this.router.navigateByUrl('posts/list')
  }

}