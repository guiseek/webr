import { ChangeDetectionStrategy, Component } from '@angular/core'
import { ButtonBase } from './button-base'

@Component({
  selector: 'button[webr][contained],a[webr][contained]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './button.component.html',
})
export class WebrButtonContainedComponent extends ButtonBase {}
