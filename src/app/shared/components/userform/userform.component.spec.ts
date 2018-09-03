import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserformComponent } from './userform.component';

describe('AdduserComponent', () => {
  let component: UserformComponent;
  let fixture: ComponentFixture<UserformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});