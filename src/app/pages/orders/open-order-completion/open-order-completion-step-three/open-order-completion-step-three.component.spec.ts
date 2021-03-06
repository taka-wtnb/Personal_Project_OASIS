import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenOrderCompletionStepThreeComponent } from './open-order-completion-step-three.component';

describe('OpenOrderCompletionStepThreeComponent', () => {
  let component: OpenOrderCompletionStepThreeComponent;
  let fixture: ComponentFixture<OpenOrderCompletionStepThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenOrderCompletionStepThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenOrderCompletionStepThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
