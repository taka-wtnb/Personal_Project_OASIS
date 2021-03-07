import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityIssueClosingStepOneComponent } from './quality-issue-closing-step-one.component';

describe('QualityIssueClosingStepOneComponent', () => {
  let component: QualityIssueClosingStepOneComponent;
  let fixture: ComponentFixture<QualityIssueClosingStepOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualityIssueClosingStepOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityIssueClosingStepOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
