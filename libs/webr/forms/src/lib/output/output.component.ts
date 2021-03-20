import { AbstractControl, ControlContainer } from '@angular/forms'
import {
  Input,
  Optional,
  Component,
  HostBinding,
  AfterViewInit,
} from '@angular/core'

export interface WebrOutputComponent {
  readonly form?: string
  status?: string
  name?: string
  for: string
}

export function coerceInitialError(ctrl: AbstractControl) {
  return !(ctrl.invalid && ctrl.touched)
}

/**
 * The output element represents the result of a calculation performed by the application, or the result of a user action.
 * @see [www.w3.org/TR/html52](https://www.w3.org/TR/html52/sec-forms.html#the-output-element)
 */
@Component({
  selector: 'output[webr]',
  template: `
    <span class="wrap-icon">
      <ng-content select="svg,webr-svg-icon"></ng-content>
    </span>
    <span class="wrap-text">
      <ng-content></ng-content>
    </span>
  `,
})
export class WebrOutputComponent implements AfterViewInit {
  @Input() control?: AbstractControl | null

  /**
   * Specifies controls from which the output was calculated
   */
  @Input('for') for: string = ''

  /**
   * Associates the control with a form element
   */
  @Input() readonly form?: string = ''

  /**
   * name of form control to use for Form submission and in the form.elements API
   */
  @Input() name?: string = ''

  /**
   * Allowed ARIA role attribute
   * (default - do not set), Any role value.
   *
   * Allowed ARIA state and property attributes
   * Global aria-* attributes
   * Any aria-* attributes applicable to the allowed roles.
   */
  @Input() status?: string = ''

  @HostBinding('attr.aria-hidden')
  get ariaHidden() {
    return this.control ? coerceInitialError(this.control) : true
  }

  constructor(@Optional() readonly container: ControlContainer) {}

  ngAfterViewInit(): void {
    if (this.container && this.for) {
      this.control = this.container.control?.get(this.for)
    }
  }
}
