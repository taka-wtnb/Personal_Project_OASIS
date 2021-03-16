import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentPriceIncreaseComponent } from './recent-price-increase.component';

describe('RecentPriceIncreaseComponent', () => {
  let component: RecentPriceIncreaseComponent;
  let fixture: ComponentFixture<RecentPriceIncreaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentPriceIncreaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentPriceIncreaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
