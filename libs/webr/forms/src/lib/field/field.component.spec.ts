import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebrFieldComponent } from './field.component';

describe('WebrFieldComponent', () => {
  let component: WebrFieldComponent;
  let fixture: ComponentFixture<WebrFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebrFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebrFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
