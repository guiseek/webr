import { AfterContentInit, ContentChild, Directive, HostBinding } from '@angular/core'
import { NgControl } from '@angular/forms'

@Directive()
export class WebrGroupCommon implements AfterContentInit {
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
