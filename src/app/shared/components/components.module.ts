import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { SinglepostComponent } from './/singlepost/singlepost.component';
import { MaterialModule } from './material';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
      NavigationComponent,
      SinglepostComponent
  ],
  imports: [
      MaterialModule,
      CommonModule,
      RouterModule

   ],
  exports:  [
      NavigationComponent,
      SinglepostComponent
  ],
})

export class ComponentsModule {}
export {NavigationComponent, SinglepostComponent };
