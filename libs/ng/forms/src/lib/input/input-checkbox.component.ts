import { WebrInputDirective } from './input.directive'
import { Component } from '@angular/core'

@Component({
  selector: 'input[webr][type="checkbox"]',
  styleUrls: ['./input.component.scss'],
  template: '',
})
export class WebrInputCheckboxComponent extends WebrInputDirective {}
