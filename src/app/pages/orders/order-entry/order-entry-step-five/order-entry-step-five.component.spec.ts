import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderEntryStepFiveComponent } from './order-entry-step-five.component';

describe('OrderEntryStepFiveComponent', () => {
  let component: OrderEntryStepFiveComponent;
  let fixture: ComponentFixture<OrderEntryStepFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderEntryStepFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderEntryStepFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
