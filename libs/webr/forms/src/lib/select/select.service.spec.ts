import { TestBed } from '@angular/core/testing';

import { WebrSelectService } from './select.service';

describe('WebrSelectService', () => {
  let service: WebrSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebrSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
