import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebrInputComponent } from './input.component';

describe('WebrInputComponent', () => {
  let component: WebrInputComponent;
  let fixture: ComponentFixture<WebrInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebrInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebrInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
