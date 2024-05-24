import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminregistrationComponent } from './adminregistration.component';

describe('AdminregistrationComponent', () => {
  let component: AdminregistrationComponent;
  let fixture: ComponentFixture<AdminregistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminregistrationComponent]
    });
    fixture = TestBed.createComponent(AdminregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
