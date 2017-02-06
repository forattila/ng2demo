/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IntervalService } from './interval.service';

describe('IntervalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IntervalService]
    });
  });

  it('should ...', inject([IntervalService], (service: IntervalService) => {
    expect(service).toBeTruthy();
  }));
});
