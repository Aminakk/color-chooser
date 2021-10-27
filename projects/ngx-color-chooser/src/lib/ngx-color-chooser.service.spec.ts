import { TestBed } from '@angular/core/testing';

import { NgxColorChooserService } from './ngx-color-chooser.service';

describe('NgxColorChooserService', () => {
  let service: NgxColorChooserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxColorChooserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
