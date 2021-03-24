import { ChangeDetectionStrategy, Component } from '@angular/core'
import { ButtonBase } from './button-base'

@Component({
  selector: 'button[webr][outlined],a[webr][outlined]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './button.component.html',
})
export class WebrButtonOutlinedComponent extends ButtonBase {}
