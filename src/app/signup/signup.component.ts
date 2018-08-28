import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { Signup } from '../shared/models/signup.model';
import { AuthService } from  '../shared/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signup: Signup = new Signup();
  signupForm: FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder, private router: Router, private authservice: AuthService ) { }

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
    this.authservice.register();
    this.router.navigate(['/user/list']);
  }
}
