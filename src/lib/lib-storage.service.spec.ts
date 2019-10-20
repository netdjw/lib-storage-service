import { TestBed } from '@angular/core/testing';

import { LibStorageService } from './lib-storage.service';

describe('LibStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibStorageService = TestBed.get(LibStorageService);
    expect(service).toBeTruthy();
  });
});
