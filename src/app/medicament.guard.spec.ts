import { TestBed } from '@angular/core/testing';

import { MedicamentGuard } from './medicament.guard';

describe('MedicamentGuard', () => {
  let guard: MedicamentGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MedicamentGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
