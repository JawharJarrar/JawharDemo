import { Component, Inject, OnInit } from '@angular/core';
import {  MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent  implements OnInit {
  public confirmMessage: string = this.data.message ;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ConfirmComponent>
  ) {}

  ngOnInit() {}

  public  onNoClick() {
    this.dialogRef.close('pass');
 }

  public accept() {
    this.dialogRef.close('delete');
  }
}
