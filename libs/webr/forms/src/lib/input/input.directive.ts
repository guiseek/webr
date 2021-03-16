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

@Directive({ selector: 'input[webr],textarea[webr]' })
export class WebrInputDirective extends DefaultValueAccessor {
  @HostBinding('class.webr-untouched')
  get formUnTouched() {
    return this.ngControl?.untouched
  }

  @HostBinding('class.webr-touched')
  get formTouched() {
    return this.ngControl?.touched
  }

  @HostBinding('class.webr-pristine')
  get formPristine() {
    return this.ngControl?.pristine
  }

  @HostBinding('class.webr-invalid')
  get formInvalid() {
    return this.ngControl?.invalid
  }

  @HostBinding('class.webr-dirty')
  get formDirty() {
    return this.ngControl?.dirty
  }

  @HostBinding('class.webr-empty')
  get formEmpty() {
    return (this.ngControl?.value || []).length === 0
  }

  @Input()
  name: string = ''

  @Input()
  formControlName: string = ''

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
