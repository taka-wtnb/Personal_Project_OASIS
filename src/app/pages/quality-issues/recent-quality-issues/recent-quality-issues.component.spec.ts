import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentQualityIssuesComponent } from './recent-quality-issues.component';

describe('RecentQualityIssuesComponent', () => {
  let component: RecentQualityIssuesComponent;
  let fixture: ComponentFixture<RecentQualityIssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentQualityIssuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentQualityIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
