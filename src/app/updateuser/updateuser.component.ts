import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../shared/services/user.service';
import { DataService } from './../shared/services/data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../shared/models/user.model';
@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
  public user: User = new User();
  public userid: number;
UpdateUserForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
                      private router: Router,
                      private userService: UserService,
                      private dataservice: DataService ) { }

  ngOnInit() {
     const userId = this.dataservice.userid;
    if (!userId) {
      alert('Invalid action.');
      this.router.navigate(['list-user']);
      return;
    }
   this.UpdateUserForm = this.formBuilder.group({

    'email': [this.user.email, [
      Validators.required,
      Validators.email
    ]],
    'name': [this.user.name, [
      Validators.required,
    ]],
    'username': [this.user.username, [
      Validators.required,
    ]],


    'phone': [this.user.phone, [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(30),
    ]]
  });

 // this.UpdateUserForm.setValue(this.userService.getById(userId));

}
onUpdateUserSubmit() {

  this.userService.updateUser(this.dataservice.userid, this.user);
  this.router.navigate(['/user/list']);

}


}
