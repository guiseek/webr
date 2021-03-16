import { NgControl } from '@angular/forms'
import {
  AfterContentInit,
  ContentChild,
  Component,
  HostBinding,
  ChangeDetectionStrategy,
} from '@angular/core'

@Component({
  selector: 'fieldset[webr]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-content select="legend"></ng-content>
    <ng-content select="label[webr-label],div"></ng-content>
  `,
})
export class WebrFieldComponent implements AfterContentInit {
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
