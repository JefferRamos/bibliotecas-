import { TestBed } from '@angular/core/testing';

import { NglCoreService } from './ngl-core.service';

describe('NglCoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NglCoreService = TestBed.get(NglCoreService);
    expect(service).toBeTruthy();
  });
});
