import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from  '../shared/services/auth.service';
import { Signup } from '../shared/models/signup.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public user: Signup = new Signup();
    loginForm: FormGroup;
    hide = true;
  constructor(private formBuilder: FormBuilder, private router: Router, private authservice: AuthService ) { }

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
    this.authservice.login();
    this.router.navigate(['/user/list']);
    }
  }
