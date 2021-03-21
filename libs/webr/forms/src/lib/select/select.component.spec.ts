import { WebrSelectPanelComponent } from './select-panel.component'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { OverlayModule } from '@angular/cdk/overlay'
import { PortalModule } from '@angular/cdk/portal'

import { WebrSelectComponent } from './select.component'

describe('WebrSelectComponent', () => {
  let component: WebrSelectComponent
  let fixture: ComponentFixture<WebrSelectComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebrSelectComponent, WebrSelectPanelComponent],
      imports: [PortalModule, OverlayModule],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(WebrSelectComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
