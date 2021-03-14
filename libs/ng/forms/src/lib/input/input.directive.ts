import {
  NgControl,
  AbstractControl,
  DefaultValueAccessor,
} from '@angular/forms'
import {
  Self,
  OnInit,
  Optional,
  Directive,
  ElementRef,
  Renderer2,
} from '@angular/core'

@Directive({ selector: 'input[webr]' })
export class WebrInputDirective extends DefaultValueAccessor implements OnInit {
  public formControlName?: string = ''
  public formControl?: AbstractControl

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
