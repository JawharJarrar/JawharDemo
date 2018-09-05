import { of } from 'rxjs';
import { Observable } from 'rxjs';

import {DataSource} from '@angular/cdk/collections';

import { User } from '../shared/models/user.model';

export class UserDataSource extends DataSource<any> {
  constructor(private  users: Array<User>) {
    super();
  }
  connect(): Observable< User[]> {
    return of(this.users) ;
  }
  disconnect() {}
}
