import { ChangeDetectionStrategy, Component } from '@angular/core'
import { ButtonBase } from './button-base'

@Component({
  selector: 'button[webr][text],a[webr][text]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './button.component.html',
})
export class WebrButtonTextComponent extends ButtonBase {}
