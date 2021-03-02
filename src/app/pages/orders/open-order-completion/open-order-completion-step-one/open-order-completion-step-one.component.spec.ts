import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenOrderCompletionStepOneComponent } from './open-order-completion-step-one.component';

describe('OpenOrderCompletionStepOneComponent', () => {
  let component: OpenOrderCompletionStepOneComponent;
  let fixture: ComponentFixture<OpenOrderCompletionStepOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenOrderCompletionStepOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenOrderCompletionStepOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
