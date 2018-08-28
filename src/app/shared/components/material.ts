import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatExpansionModule
} from '@angular/material';






@NgModule({

    imports: [
      MatIconModule,
      MatTableModule,
      MatButtonModule,
      MatCardModule,
      MatInputModule,
      MatExpansionModule,
      MatListModule,
      MatToolbarModule,
      MatSidenavModule],
    exports: [
      MatIconModule,
      MatTableModule,
        MatButtonModule,
        MatCardModule,
        MatExpansionModule,
        MatInputModule,
        MatListModule,
        MatToolbarModule,
        MatSidenavModule  ],



  })









export class MaterialModule {}
