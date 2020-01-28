import { TestBed } from '@angular/core/testing';

import { VgFullscreenAPI } from './vg-fullscreen-api';

describe('VgFullscreenApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VgFullscreenAPI = TestBed.get(VgFullscreenAPI);
    expect(service).toBeTruthy();
  });
});
