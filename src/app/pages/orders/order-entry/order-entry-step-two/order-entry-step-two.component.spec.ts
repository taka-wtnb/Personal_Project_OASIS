import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderEntryStepTwoComponent } from './order-entry-step-two.component';

describe('OrderEntryStepTwoComponent', () => {
  let component: OrderEntryStepTwoComponent;
  let fixture: ComponentFixture<OrderEntryStepTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderEntryStepTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderEntryStepTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
