/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DocumentInfoService } from './document-info.service';

describe('Service: DocumentInfo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DocumentInfoService]
    });
  });

  it('should ...', inject([DocumentInfoService], (service: DocumentInfoService) => {
    expect(service).toBeTruthy();
  }));
});
