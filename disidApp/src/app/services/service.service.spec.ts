import { TestBed } from '@angular/core/testing';

import { EmployedService } from './employed.service';

describe('ServiceService', () => {
  let service: EmployedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
