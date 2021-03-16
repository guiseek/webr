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
    email: ['', [WebrValidators.required, WebrValidators.email]],
    password: ['', [WebrValidators.required, WebrValidators.minLength(6)]],
    cpf: ['', WebrValidators.cpf],
  })
  constructor(readonly fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.form.value)
  }

  onSend(data: any) {
    console.log(data)
  }
}
