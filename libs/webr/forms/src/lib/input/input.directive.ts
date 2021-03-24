import { NgControl, DefaultValueAccessor } from '@angular/forms'
import {
  Self,
  Input,
  Optional,
  Directive,
  ElementRef,
  Renderer2,
  HostBinding,
} from '@angular/core'

@Directive({ selector: 'input[webr]' })
export class WebrInputDirective extends DefaultValueAccessor {
  @HostBinding('class')
  public get webrInputStates() {
    const states: string[] = []
    if (this.ngControl?.untouched) {
      states.push('webr-untouched')
    }
    if (this.ngControl?.touched) {
      states.push('webr-touched')
    }
    if (this.ngControl?.pristine) {
      states.push('webr-pristine')
    }
    if (this.ngControl?.invalid) {
      states.push('webr-invalid')
    }
    if (this.ngControl?.valid) {
      states.push('webr-valid')
    }
    if (this.ngControl?.dirty) {
      states.push('webr-dirty')
    }
    return states.join(' ')
  }

  @HostBinding('class.webr-empty')
  public get formEmpty() {
    return (this.ngControl?.value || []).length === 0
  }

  @Input()
  public name = ''

  @Input()
  public formControlName = ''

  @HostBinding('name')
  get controlName() {
    if (this.name) {
      return this.name
    }
    if (this.formControlName) {
      return this.formControlName
    }
    return ''
  }

  constructor(
    @Self()
    @Optional()
    public ngControl: NgControl,
    renderer: Renderer2,
    element: ElementRef
  ) {
    super(renderer, element, true)
  }
}
