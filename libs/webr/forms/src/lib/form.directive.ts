import { WebrForm, FormSendEvent } from './form.interface'
import { FormGroup } from './types/form-group'
import {
  Input,
  Output,
  Directive,
  ElementRef,
  EventEmitter,
  AfterViewInit,
} from '@angular/core'

@Directive({ selector: 'form[webr][formGroup]' })
export class WebrFormDirective implements WebrForm, AfterViewInit {
  @Input() formGroup = new FormGroup({})

  @Input() touchedOnSend = true

  private _form: HTMLFormElement

  public set form(form: HTMLFormElement) {
    this._form = form
  }
  public get form() {
    return this._form
  }

  @Output() send = new EventEmitter<FormSendEvent>()

  constructor(private readonly _element: ElementRef<HTMLFormElement>) {
    this._form = this._element.nativeElement
  }

  ngAfterViewInit(): void {
    this._form.addEventListener('submit', (ev: Event) => {
      const { elements } = ev.target as HTMLFormElement
      const { controls } = this.formGroup
      this.send.emit({ elements, controls })

      if (this.touchedOnSend) {
        this.formGroup.markAllAsTouched()
      }
    })
  }
}
