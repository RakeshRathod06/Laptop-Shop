import { TestBed } from '@angular/core/testing';

import { UserorderService } from './userorder.service';

describe('UserorderService', () => {
  let service: UserorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
