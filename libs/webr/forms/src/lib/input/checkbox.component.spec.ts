import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebrCheckboxComponent } from './checkbox.component';

describe('WebrCheckboxComponent', () => {
  let component: WebrCheckboxComponent;
  let fixture: ComponentFixture<WebrCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebrCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebrCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
