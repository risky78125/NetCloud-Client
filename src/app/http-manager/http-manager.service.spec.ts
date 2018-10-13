import { TestBed } from '@angular/core/testing';

import { HttpManager } from './http-manager.service';

describe('HttpManager', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpManager = TestBed.get(HttpManager);
    expect(service).toBeTruthy();
  });
});
