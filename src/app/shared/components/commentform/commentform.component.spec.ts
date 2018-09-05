import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './../material';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA,  MatDialogRef } from '@angular/material';

import { CommentformComponent } from './commentform.component';

describe('UpdatecommentComponent', () => {
  let component: CommentformComponent;
  let fixture: ComponentFixture<CommentformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpClientModule
       ],
      declarations: [ CommentformComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA , useValue: {} },
        { provide: MatDialogRef, useValue: {} }
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
