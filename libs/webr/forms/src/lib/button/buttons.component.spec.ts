import { ComponentFixture, TestBed } from '@angular/core/testing'

import { WebrButtonUnelevatedComponent } from './unelevated.component'
import { WebrButtonContainedComponent } from './contained.component'
import { WebrButtonOutlinedComponent } from './outlined.component'
import { WebrButtonTextComponent } from './text.component'

describe('WebrButtonUnelevatedComponent', () => {
  let unelevated: WebrButtonUnelevatedComponent
  let unelevatedFixture: ComponentFixture<WebrButtonUnelevatedComponent>
  let contained: WebrButtonContainedComponent
  let containedFixture: ComponentFixture<WebrButtonContainedComponent>
  let outlined: WebrButtonOutlinedComponent
  let outlinedFixture: ComponentFixture<WebrButtonOutlinedComponent>
  let text: WebrButtonTextComponent
  let textFixture: ComponentFixture<WebrButtonTextComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        WebrButtonUnelevatedComponent,
        WebrButtonContainedComponent,
        WebrButtonOutlinedComponent,
        WebrButtonTextComponent
      ],
    }).compileComponents()
  })

  beforeEach(() => {
    unelevatedFixture = TestBed.createComponent(WebrButtonUnelevatedComponent)
    unelevated = unelevatedFixture.componentInstance
    unelevatedFixture.detectChanges()

    containedFixture = TestBed.createComponent(WebrButtonContainedComponent)
    contained = containedFixture.componentInstance
    containedFixture.detectChanges()

    outlinedFixture = TestBed.createComponent(WebrButtonOutlinedComponent)
    outlined = outlinedFixture.componentInstance
    outlinedFixture.detectChanges()

    textFixture = TestBed.createComponent(WebrButtonTextComponent)
    text = textFixture.componentInstance
    textFixture.detectChanges()
  })

  it('should unelevated button create', () => {
    expect(unelevated).toBeTruthy()
  })
  it('should contained button create', () => {
    expect(contained).toBeTruthy()
  })
  it('should outlined button create', () => {
    expect(outlined).toBeTruthy()
  })
  it('should text button create', () => {
    expect(text).toBeTruthy()
  })
})

