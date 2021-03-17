import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebrLabelComponent } from './label.component';

describe('WebrLabelComponent', () => {
  let component: WebrLabelComponent;
  let fixture: ComponentFixture<WebrLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebrLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebrLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
