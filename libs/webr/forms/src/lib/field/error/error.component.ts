import { AbstractControl, ControlContainer } from '@angular/forms'
import {
  Input,
  OnInit,
  Component,
  HostBinding,
  ChangeDetectionStrategy,
} from '@angular/core'

@Component({
  selector: 'span[webr-error]',
  exportAs: 'webrErrorKeys',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebrErrorComponent implements OnInit {
  @Input('webr-error') readonly name: string = ''

  private _control!: AbstractControl | null

  @HostBinding('attr.aria-hidden')
  get ariaHidden() {
    return !(this._control?.touched && this._control?.invalid)
  }

  constructor(readonly container: ControlContainer) {
    if (!this.container) {
      throw new Error('ControlContainer não existe')
    }
  }

  ngOnInit(): void {
    if (!this.name) {
      throw new Error('Informe o name')
    }
    const { control } = this.container
    this._control = control?.get(this.name) ?? null
  }
}
