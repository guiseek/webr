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
  @HostBinding('class.webr-untouched')
  public get formUnTouched() {
    return this.ngControl?.untouched
  }

  @HostBinding('class.webr-touched')
  public get formTouched() {
    return this.ngControl?.touched
  }

  @HostBinding('class.webr-pristine')
  public get formPristine() {
    return this.ngControl?.pristine
  }

  @HostBinding('class.webr-invalid')
  public get formInvalid() {
    return this.ngControl?.invalid
  }

  @HostBinding('class.webr-valid')
  public get formValid() {
    return this.ngControl?.valid
  }

  @HostBinding('class.webr-dirty')
  public get formDirty() {
    return this.ngControl?.dirty
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
