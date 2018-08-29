import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { DataService } from '../shared/services/data.service';
import {DataSource} from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import {User} from '../shared/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  dataSource = new UserDataSource(this.userService);
  displayedColumns = ['id', 'name', 'email', 'phone',  'company', 'website', 'actions'];
  DeleteUser(id: number) {
    if ( confirm('sure you want to remove this user ?' )) {
      this.userService.deleteUser(id);
    }
  }
  UpdateUser(id: Number) {
    this.dataService.userid = id;
    this.router.navigate(['UpdateUser']);
  }

  constructor(private userService: UserService, private  dataService: DataService, private router: Router) { }
   ngOnInit() {
  }
}

export class UserDataSource extends DataSource<any> {
  constructor(private userService: UserService) {
    super();
  }
  connect(): Observable<User[]> {
    return this.userService.getAll();
  }
  disconnect() {}
}
