import { TestBed } from '@angular/core/testing';

import { Serviceteacher } from './serviceteacher';

describe('Serviceteacher', () => {
  let service: Serviceteacher;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Serviceteacher);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
