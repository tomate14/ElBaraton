import { TestBed } from '@angular/core/testing';

import { ConfirmarService } from './confirmar.service';

describe('ConfirmarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfirmarService = TestBed.get(ConfirmarService);
    expect(service).toBeTruthy();
  });
});
