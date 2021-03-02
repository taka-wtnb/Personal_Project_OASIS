import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderEntryStepOneComponent } from './order-entry-step-one.component';

describe('OrderEntryStepOneComponent', () => {
  let component: OrderEntryStepOneComponent;
  let fixture: ComponentFixture<OrderEntryStepOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderEntryStepOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderEntryStepOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
