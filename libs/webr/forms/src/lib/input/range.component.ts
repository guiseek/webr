import { ChangeDetectionStrategy, Component } from '@angular/core'
import { WebrInputDirective } from './input.directive'

@Component({
  selector: 'input[webr][type="range"]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '',
})
export class WebrRangeComponent extends WebrInputDirective {}
