import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { SinglepostComponent } from './/singlepost/singlepost.component';
import { AddcommentComponent } from './addcomment/addcomment.component';
import { UpdatecommentComponent } from './updatecomment/updatecomment.component';
import { MaterialModule } from './material';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
      NavigationComponent,
      SinglepostComponent,
      AddcommentComponent,
      UpdatecommentComponent,
  ],
  imports: [
      MaterialModule,
      CommonModule,
      RouterModule,
      ReactiveFormsModule

   ],
   entryComponents: [
    AddcommentComponent,
    UpdatecommentComponent,

  ],
  exports:  [
      NavigationComponent,
      SinglepostComponent,
      AddcommentComponent,
      UpdatecommentComponent
  ],
})

export class ComponentsModule {}
export {NavigationComponent, SinglepostComponent, AddcommentComponent, UpdatecommentComponent };
