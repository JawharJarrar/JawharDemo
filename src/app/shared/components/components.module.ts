import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { CommentformComponent } from './commentform/commentform.component';

import { SinglepostComponent } from './singlepost/singlepost.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { PostformComponent } from './postform/postform.component';
import { UserformComponent } from './userform/userform.component';


import { MaterialModule } from './material';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
      NavigationComponent,
      SinglepostComponent,
      CommentformComponent,
      UserformComponent,
      PostformComponent,
      ConfirmComponent,
  ],
  imports: [
      MaterialModule,
      CommonModule,
      RouterModule,
      ReactiveFormsModule,
   ],
   entryComponents: [
    CommentformComponent,
    ConfirmComponent,
    UserformComponent,
    PostformComponent
  ],
  exports:  [
      NavigationComponent,
      SinglepostComponent,
      CommentformComponent,
  ],
})

export class ComponentsModule {}
export {NavigationComponent, SinglepostComponent, CommentformComponent};
