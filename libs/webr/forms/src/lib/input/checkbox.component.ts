import { WebrInputDirective } from './input.directive'
import {
  Input,
  Component,
  HostBinding,
  ChangeDetectionStrategy,
} from '@angular/core'

@Component({
  selector: 'input[webr][type="checkbox"]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '',
})
export class WebrCheckboxComponent extends WebrInputDirective {
  private _indeterminate = false
  public set indeterminate(value) {
    this._indeterminate = value
  }

  @Input()
  @HostBinding('indeterminate')
  public get indeterminate() {
    return this._indeterminate === true || this.ngControl?.value === null
  }
}
