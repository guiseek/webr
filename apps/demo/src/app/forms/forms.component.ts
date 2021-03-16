import { Component, OnInit } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { WebrValidators } from '@webr/forms'

@Component({
  selector: 'webr-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  form = this.fb.group({
    text: ['', WebrValidators.required],
    number: ['', WebrValidators.required],
    textarea: ['', WebrValidators.required],
    radio: ['', WebrValidators.required],
    checkbox: ['', WebrValidators.required],
    checked: [true, WebrValidators.required],
    indeterminate: [undefined, WebrValidators.required],
    name: ['', WebrValidators.required],
    email: ['', [WebrValidators.required, WebrValidators.email]],
    password: ['', WebrValidators.required, WebrValidators.minLength(6)],
    message: ['', WebrValidators.maxLength(1000)],
    age: ['', WebrValidators.min(18)],
    cpf: ['', WebrValidators.cpf],
    sexo: ['F', WebrValidators.required],
    termos: [true, WebrValidators.requiredTrue],
  })
  constructor(readonly fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.form.value)
  }
}
