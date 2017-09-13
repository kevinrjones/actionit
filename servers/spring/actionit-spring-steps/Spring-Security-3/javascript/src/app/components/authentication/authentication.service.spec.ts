import { TestBed, inject } from '@angular/core/testing';

import { AuthenticattionService } from './authenticattion.service';

describe('AuthenticattionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticattionService]
    });
  });

  it('should be created', inject([AuthenticattionService], (service: AuthenticattionService) => {
    expect(service).toBeTruthy();
  }));
});
