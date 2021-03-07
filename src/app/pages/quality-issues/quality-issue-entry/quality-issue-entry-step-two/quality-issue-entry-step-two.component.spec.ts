import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityIssueEntryStepTwoComponent } from './quality-issue-entry-step-two.component';

describe('QualityIssueEntryStepTwoComponent', () => {
  let component: QualityIssueEntryStepTwoComponent;
  let fixture: ComponentFixture<QualityIssueEntryStepTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualityIssueEntryStepTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityIssueEntryStepTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
