import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl } from '@webr/forms'

@Component({
  selector: 'webr-mask',
  templateUrl: './mask.component.html',
  styleUrls: ['./mask.component.scss'],
})
export class MaskComponent implements OnInit {
  form = new FormGroup({
    validateMask: new FormControl(null),
    simpleMask: new FormControl(null),
    multiMask: new FormControl(null),
    unmaskedMask: new FormControl(null),

    currency: new FormControl(null),

    simpleCurrency: new FormControl(null),
    customCurrency: new FormControl(null),
    clearCurrency: new FormControl(null),
    custom2Currency: new FormControl(null),

    wrappedMask: new FormControl(null),
  })
  constructor() {}

  ngOnInit(): void {}
}
