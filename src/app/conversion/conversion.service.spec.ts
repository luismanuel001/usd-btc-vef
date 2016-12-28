/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConversionService } from './conversion.service';

describe('ConversionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConversionService]
    });
  });

  it('should ...', inject([ConversionService], (service: ConversionService) => {
    expect(service).toBeTruthy();
  }));
});
