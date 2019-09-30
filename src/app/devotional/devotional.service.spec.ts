import { TestBed } from '@angular/core/testing';

import { DevotionalService } from './devotional.service';

describe('DevotionalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DevotionalService = TestBed.get(DevotionalService);
    expect(service).toBeTruthy();
  });
});
