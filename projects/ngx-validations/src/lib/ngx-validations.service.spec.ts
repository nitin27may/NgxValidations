import { TestBed } from '@angular/core/testing';

import { NgxValidationsService } from './ngx-validations.service';

describe('NgxValidationsService', () => {
  let service: NgxValidationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxValidationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
