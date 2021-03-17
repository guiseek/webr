import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebrRadioComponent } from './radio.component';

describe('WebrRadioComponent', () => {
  let component: WebrRadioComponent;
  let fixture: ComponentFixture<WebrRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebrRadioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebrRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
