import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityIssueEntryStepOneComponent } from './quality-issue-entry-step-one.component';

describe('QualityIssueEntryStepOneComponent', () => {
  let component: QualityIssueEntryStepOneComponent;
  let fixture: ComponentFixture<QualityIssueEntryStepOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualityIssueEntryStepOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityIssueEntryStepOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
