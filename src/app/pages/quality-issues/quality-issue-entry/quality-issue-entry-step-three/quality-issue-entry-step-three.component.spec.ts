import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityIssueEntryStepThreeComponent } from './quality-issue-entry-step-three.component';

describe('QualityIssueEntryStepThreeComponent', () => {
  let component: QualityIssueEntryStepThreeComponent;
  let fixture: ComponentFixture<QualityIssueEntryStepThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualityIssueEntryStepThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityIssueEntryStepThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
