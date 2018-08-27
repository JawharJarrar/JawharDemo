import { NgModule } from '@angular/core';

import { NavigationComponent } from './navigation/navigation.component';
import { UserListComponent } from '../../user-list/user-list.component';



@NgModule({
  declarations: [
      NavigationComponent,
      UserListComponent,
  ],
  imports: [ ],
  exports:  [
      NavigationComponent,
      UserListComponent,
  ],
})

export class ComponentsModule {}
export {NavigationComponent, UserListComponent };
