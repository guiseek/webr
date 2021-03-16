import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { WebrInputDirective } from './input.directive'

@Component({
  selector: 'input[webr][type="radio"]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '',
})
export class WebrRadioComponent extends WebrInputDirective {}
