import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserorderComponent } from './userorder.component';

describe('UserorderComponent', () => {
  let component: UserorderComponent;
  let fixture: ComponentFixture<UserorderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserorderComponent]
    });
    fixture = TestBed.createComponent(UserorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
