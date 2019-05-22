import { TestBed } from '@angular/core/testing';

import { NgDebugService } from './ng-debug.service';

describe('NgDebugService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgDebugService = TestBed.get(NgDebugService);
    expect(service).toBeTruthy();
  });
});
