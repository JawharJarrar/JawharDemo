import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentformComponent } from './commentform.component';

describe('UpdatecommentComponent', () => {
  let component: CommentformComponent;
  let fixture: ComponentFixture<CommentformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
