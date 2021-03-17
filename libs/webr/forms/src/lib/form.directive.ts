import { AbstractControl, FormGroup } from '@angular/forms'
import {
  Input,
  Output,
  Directive,
  ElementRef,
  EventEmitter,
  AfterViewInit,
} from '@angular/core'

export type FormSendEvent = {
  controls: Record<string, AbstractControl>
  elements: HTMLFormControlsCollection
}

@Directive({ selector: 'form[webr][formGroup]' })
export class WebrFormDirective implements AfterViewInit {
  @Input() formGroup = new FormGroup({})

  @Input() touchedOnSend = true

  private readonly _form!: HTMLFormElement

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
