import { NgControl } from '@angular/forms'
import {
  Component,
  HostBinding,
  ContentChild,
  AfterContentInit,
  ChangeDetectionStrategy,
} from '@angular/core'

@Component({
  selector: 'fieldset[webr]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-content [attr.select]="selectors.legend"></ng-content>
    <ng-content [attr.select]="selectors.content"></ng-content>
    <ng-content [attr.select]="selectors.error"></ng-content>
  `,
})
export class WebrFieldComponent implements AfterContentInit {
  readonly selectors = {
    legend: 'legend',
    content: ['label', '[webr-label]', 'section', 'div'].join(','),
    error: 'span[webr-error]',
  }

  @HostBinding('attr.aria-live')
  addAriaLiveHostAttr = 'polite'

  @HostBinding('attr.aria-atomic')
  addingAriaAtomicHostAttr = true

  @ContentChild(NgControl) control!: NgControl
  ngAfterContentInit(): void {
    if (!this.control) {
      throw new Error('NgControl não encontrado')
    }
  }

  @HostBinding('class.webr-untouched')
  get formUnTouched() {
    return this.control?.untouched
  }

  @HostBinding('class.webr-touched')
  get formTouched() {
    return this.control?.touched
  }

  @HostBinding('class.webr-pristine')
  get formPristine() {
    return this.control?.pristine
  }

  @HostBinding('class.webr-invalid')
  get formInvalid() {
    return this.control?.invalid
  }
}
