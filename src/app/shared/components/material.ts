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
  MatExpansionModule,
  MatDialogModule,
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
      MatSidenavModule,
      MatDialogModule  ],
    exports: [
      MatIconModule,
      MatTableModule,
        MatButtonModule,
        MatCardModule,
        MatExpansionModule,
        MatInputModule,
        MatListModule,
        MatToolbarModule,
        MatSidenavModule,
        MatDialogModule  ],
      })

export class MaterialModule {}
