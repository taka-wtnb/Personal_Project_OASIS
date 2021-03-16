import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryHelperComponent } from './entry-helper.component';

describe('EntryHelperComponent', () => {
  let component: EntryHelperComponent;
  let fixture: ComponentFixture<EntryHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryHelperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
