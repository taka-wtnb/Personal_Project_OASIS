import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderEntryStepThreeComponent } from './order-entry-step-three.component';

describe('OrderEntryStepThreeComponent', () => {
  let component: OrderEntryStepThreeComponent;
  let fixture: ComponentFixture<OrderEntryStepThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderEntryStepThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderEntryStepThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
