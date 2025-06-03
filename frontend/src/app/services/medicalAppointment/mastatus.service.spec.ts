import { TestBed } from '@angular/core/testing';

import { MAStatusService } from './mastatus.service';

describe('MAStatusService', () => {
  let service: MAStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MAStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
