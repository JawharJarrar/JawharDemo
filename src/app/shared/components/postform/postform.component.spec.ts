import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './../material';
import { PostformComponent } from './postform.component';

describe('UpdatepostComponent', () => {
  let component: PostformComponent;
  let fixture: ComponentFixture<PostformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
          MaterialModule,
          ReactiveFormsModule,
          HttpClientModule,
          RouterTestingModule,
          BrowserAnimationsModule
        ],
      declarations: [ PostformComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA , useValue: {} },
        { provide: MatDialogRef, useValue: {} }
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
