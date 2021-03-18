import { Component } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { WebrValidators } from '@webr/forms'

@Component({
  selector: 'webr-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent {
  form = this.fb.group({
    text: ['', WebrValidators.required],
    number: ['', [WebrValidators.required, WebrValidators.min(18)]],
    textarea: ['', WebrValidators.required],
    radio: ['', [WebrValidators.required, WebrValidators.forbidden(/B/)]],
    checkbox: [false, WebrValidators.requiredTrue],
    checked: [true, WebrValidators.requiredTrue],
    indeterminate: [null],
    email: ['', [WebrValidators.required, WebrValidators.email]],
    password: ['', [WebrValidators.required, WebrValidators.minLength(6)]],
    cpf: ['', [WebrValidators.required, WebrValidators.cpf]],
  })
  constructor(readonly fb: FormBuilder) {}

  onSubmit() {
    console.log(this.form.value)
  }

  onSend(data: any) {
    console.log(data)
  }
}
