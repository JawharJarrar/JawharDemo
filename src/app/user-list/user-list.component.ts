import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';

import { UserService } from '../shared/services/user.service';
import { DataService } from '../shared/services/data.service';
import { UserDataSource } from './userdatasource';
import {User} from '../shared/models/user.model';
import { UserformComponent } from '../shared/components/userform/userform.component';
import { ConfirmComponent } from  '../shared/components/confirm/confirm.component';

@Component({
  selector: 'app-data',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public users: Array<User>;
  public  dataSource = new UserDataSource(this.users);
  public displayedColumns = ['id', 'name', 'email', 'phone', 'website', 'actions'];
  constructor(
    private userService: UserService,
    private  dataService: DataService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  this.userService.getAll().subscribe(data => {
    this.users = data;
    this.dataSource = new UserDataSource(this.users);
  });
}

  AddUser( ) {
    const dialogRef = this.dialog.open(UserformComponent, {
      data: { name: '' }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.users.push(result);
      this.dataSource = new UserDataSource(this.users);
    });
  }

  DeleteUser(user: User) {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      data: { message: 'are you sure you want to delete this user ?' }
    });
    dialogRef.afterClosed().subscribe(result => {
      if ( result === 'yes' ) {
        this.userService.deleteUser(user);
        const index = this.users.indexOf(user);
        this.users.splice(index, 1);
        this.dataSource = new UserDataSource(this.users);
      }
    });
   }

  UpdateUser(ud: number, user: User) {
    const index = this.users.indexOf(user);
    this.dataService.userid = user.id;
    const dialogRef = this.dialog.open(UserformComponent, {
      data: { action: 'edit', name: user.name, website: user.website, phone: user.phone, email: user.email}
      });
    dialogRef.afterClosed().subscribe(result => {
      this.users[index] = result;
      this.dataSource = new UserDataSource(this.users);
    });
  }
}
