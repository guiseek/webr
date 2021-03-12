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
    checkbox: [false, Validators.requiredTrue],
    radios: [3],
    radio: [20],
  })

  items = []

  compareFn(c1: any, c2: any): boolean {
    return c1 === c2
  }

  constructor(private _fb: FormBuilder) {
    window.setTimeout(() => {
      this.items = [
        { value: { id: 1, name: 'Um' }, name: 'Item 1' },
        { value: { id: 2, name: 'Dois' }, name: 'Item 2' },
        { value: { id: 3, name: 'Três' }, name: 'Item 3' },
      ]
    }, 3000)
  }

  onChange($event: any) {
    console.log($event)
  }

  onCheck($event: any) {
    console.log($event)
  }
}
