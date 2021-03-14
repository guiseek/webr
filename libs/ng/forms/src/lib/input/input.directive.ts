import { NgControl, DefaultValueAccessor } from '@angular/forms'
import {
  Self,
  OnInit,
  Optional,
  Directive,
  ElementRef,
  Renderer2,
  HostBinding,
} from '@angular/core'

@Directive({ selector: 'input[webr]' })
export class WebrInputDirective extends DefaultValueAccessor implements OnInit {
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

  constructor(
    @Self()
    @Optional()
    public ngControl: NgControl,
    renderer: Renderer2,
    element: ElementRef
  ) {
    super(renderer, element, true)
  }

  ngOnInit(): void {
    console.log(this.ngControl)
  }
}
