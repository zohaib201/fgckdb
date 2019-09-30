import { TestBed } from '@angular/core/testing';

import { FgckFormService } from './fgck-form.service';

describe('FgckFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FgckFormService = TestBed.get(FgckFormService);
    expect(service).toBeTruthy();
  });
});
