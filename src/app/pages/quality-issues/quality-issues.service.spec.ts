import { TestBed } from '@angular/core/testing';

import { QualityIssuesService } from './quality-issues.service';

describe('QualityIssuesService', () => {
  let service: QualityIssuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QualityIssuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
