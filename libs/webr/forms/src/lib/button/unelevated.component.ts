import { ChangeDetectionStrategy, Component } from '@angular/core'
import { ButtonBase } from './button-base'

@Component({
  selector: 'button[webr][unelevated],a[webr][unelevated]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './button.component.html',
})
export class WebrButtonUnelevatedComponent extends ButtonBase {}
