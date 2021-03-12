import { Output, Component, EventEmitter} from '@angular/core'
import { WebrInputDirective } from './input.directive'

@Component({
  selector: 'input[webr][type="radio"]',
  styleUrls: ['./input.component.scss'],
  template: '',
})
export class WebrInputRadioComponent extends WebrInputDirective {
  @Output() hostChange = new EventEmitter<Event>()
}
