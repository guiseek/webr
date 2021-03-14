import { ComponentFixture, TestBed } from '@angular/core/testing'

import { WebrInputComponent } from './input.component'
import { WebrInputRadioComponent } from './input-radio.component'
import { WebrInputCheckboxComponent } from './input-checkbox.component'

describe('InputComponent', () => {
  let input: WebrInputComponent
  let inputFixture: ComponentFixture<WebrInputComponent>

  let radio: WebrInputRadioComponent
  let radioFixture: ComponentFixture<WebrInputRadioComponent>

  let checkbox: WebrInputCheckboxComponent
  let checkboxFixture: ComponentFixture<WebrInputCheckboxComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebrInputComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    inputFixture = TestBed.createComponent(WebrInputComponent)
    input = inputFixture.componentInstance
    inputFixture.detectChanges()
  })

  it('should create', () => {
    expect(input).toBeTruthy()
  })
})
