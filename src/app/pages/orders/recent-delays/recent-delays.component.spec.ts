import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentDelaysComponent } from './recent-delays.component';

describe('RecentDelaysComponent', () => {
  let component: RecentDelaysComponent;
  let fixture: ComponentFixture<RecentDelaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentDelaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentDelaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
