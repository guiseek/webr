import { WebrIconsModule } from '@webr/icons'
import { WebrFormsModule } from '@webr/forms'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { ReactiveFormsModule } from '@angular/forms'

import { FormsComponent } from './forms.component'

describe('FormsComponent', () => {
  let component: FormsComponent
  let fixture: ComponentFixture<FormsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormsComponent],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        WebrIconsModule.forRoot(),
        WebrFormsModule,
      ],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
