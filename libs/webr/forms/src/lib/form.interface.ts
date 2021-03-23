import { AbstractControl } from './types/types';
import { AfterViewInit, EventEmitter } from '@angular/core'
import { FormGroup } from '@webr/forms'


export type FormSendEvent = {
  controls: Record<string, AbstractControl>
  elements: HTMLFormControlsCollection
}

export interface WebrForm extends AfterViewInit {
  formGroup: FormGroup

  touchedOnSend: boolean

  form: HTMLFormElement

  send: EventEmitter<FormSendEvent>

  ngAfterViewInit: () => void
}
