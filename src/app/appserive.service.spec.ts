import { TestBed } from '@angular/core/testing';

import { AppseriveService } from './appserive.service';

describe('AppseriveService', () => {
  let service: AppseriveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppseriveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
