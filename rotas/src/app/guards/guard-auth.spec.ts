import { TestBed } from '@angular/core/testing';

import { GuardAuth } from './guard.auth';

describe('GuardAuthService', () => {
  let service: typeof GuardAuth;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardAuth);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
