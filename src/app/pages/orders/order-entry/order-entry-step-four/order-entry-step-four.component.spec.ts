import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderEntryStepFourComponent } from './order-entry-step-four.component';

describe('OrderEntryStepFourComponent', () => {
  let component: OrderEntryStepFourComponent;
  let fixture: ComponentFixture<OrderEntryStepFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderEntryStepFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderEntryStepFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
