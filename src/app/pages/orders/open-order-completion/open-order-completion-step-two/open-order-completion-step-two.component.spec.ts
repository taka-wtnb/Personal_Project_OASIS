import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenOrderCompletionStepTwoComponent } from './open-order-completion-step-two.component';

describe('OpenOrderCompletionStepTwoComponent', () => {
  let component: OpenOrderCompletionStepTwoComponent;
  let fixture: ComponentFixture<OpenOrderCompletionStepTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenOrderCompletionStepTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenOrderCompletionStepTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
