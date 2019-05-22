import { TestBed } from '@angular/core/testing';

import { NgDebugMenuService } from './ng-debug-menu.service';

describe('NgDebugMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgDebugMenuService = TestBed.get(NgDebugMenuService);
    expect(service).toBeTruthy();
  });
});
