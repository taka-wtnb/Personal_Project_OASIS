import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityIssueClosingStepTwoComponent } from './quality-issue-closing-step-two.component';

describe('QualityIssueClosingStepTwoComponent', () => {
  let component: QualityIssueClosingStepTwoComponent;
  let fixture: ComponentFixture<QualityIssueClosingStepTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualityIssueClosingStepTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityIssueClosingStepTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
