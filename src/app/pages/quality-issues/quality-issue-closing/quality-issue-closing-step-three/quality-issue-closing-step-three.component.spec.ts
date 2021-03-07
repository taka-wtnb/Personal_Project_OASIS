import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityIssueClosingStepThreeComponent } from './quality-issue-closing-step-three.component';

describe('QualityIssueClosingStepThreeComponent', () => {
  let component: QualityIssueClosingStepThreeComponent;
  let fixture: ComponentFixture<QualityIssueClosingStepThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualityIssueClosingStepThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityIssueClosingStepThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
