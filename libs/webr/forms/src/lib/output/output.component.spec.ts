import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebrOutputComponent } from './output.component';

describe('WebrOutputComponent', () => {
  let component: WebrOutputComponent;
  let fixture: ComponentFixture<WebrOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebrOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebrOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
