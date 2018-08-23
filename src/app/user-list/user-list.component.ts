import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {DataSource} from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import {User} from '../models/user.model';



@Component({
  selector: 'app-data',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

 dataSource = new UserDataSource(this.userService);
 displayedColumns = ['id','name', 'email','phone','company','website','actions'];
  constructor(private userService: UserService) { }

  
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