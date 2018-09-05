import { MatDialogRef } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from './../material';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentformComponent } from './commentform.component';

describe('CommentformComponent', () => {
  let component: CommentformComponent;
  let fixture: ComponentFixture<CommentformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, FormsModule, HttpClientModule, MatDialogRef, ReactiveFormsModule, MaterialModule ],
      declarations: [ CommentformComponent ]
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
