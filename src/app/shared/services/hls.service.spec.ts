import { TestBed } from '@angular/core/testing';

import { HlsService } from './hls.service';

describe('HlsService', () => {
  let service: HlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
