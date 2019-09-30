import { TestBed } from '@angular/core/testing';

import { MemberFromAppService } from './member-from-app.service';

describe('MemberFromAppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MemberFromAppService = TestBed.get(MemberFromAppService);
    expect(service).toBeTruthy();
  });
});
