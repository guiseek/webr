import { FormBuilder, Validators } from '@angular/forms'
import { Component } from '@angular/core'

@Component({
  selector: 'webr-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  form = this._fb.group({
    text: ['', Validators.required],
    email: ['', Validators.email],
    search: ['', Validators.minLength(2)],
    checkbox: [true, Validators.requiredTrue],
    radios: [],
    radio: [20],
  })

  items = []

  compareFn(c1: any, c2: any): boolean {
    return c1.id === c2.id
  }

  constructor(private _fb: FormBuilder) {
    window.setTimeout(() => {
      this.items = [
        { value: 1, name: 'Item 1' },
        { value: 2, name: 'Item 2' },
        { value: 3, name: 'Item 3' },
      ]

      window.setTimeout(() => {
        this.form.get('radios').setValue(1)
      }, 2000)
    }, 3000)
  }

  onChange($event: any) {
    console.log($event)
  }

  onCheck($event: any) {
    console.log($event)
  }
}
