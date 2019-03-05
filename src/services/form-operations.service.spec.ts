import { TestBed } from '@angular/core/testing';

import { FormOperationsService } from './form-operations.service';

describe('FormOperationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormOperationsService = TestBed.get(FormOperationsService);
    expect(service).toBeTruthy();
  });
});
