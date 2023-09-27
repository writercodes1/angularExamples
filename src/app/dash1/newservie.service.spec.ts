import { TestBed } from '@angular/core/testing';

import { NewservieService } from './newservie.service';

describe('NewservieService', () => {
  let service: NewservieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewservieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
