import { OnInit, Component, Input, HostBinding } from '@angular/core'
import { AbstractControl, ControlContainer } from '@angular/forms'

@Component({
  selector: 'span[webr-error]',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class WebrErrorComponent implements OnInit {
  @Input() readonly controlName: string = ''

  private _control!: AbstractControl | null

  @HostBinding('style.visibility')
  get visibility() {
    // Esconde se não foi tocado
    if (this._control?.untouched) {
      return 'hidden'
    }
    return this._control?.touched && // Somente se já foi tocado
      this._control?.valid // Quando válido
      ? 'hidden' // Esconde o erro
      : 'visible' // Mostra o erro
  }

  constructor(readonly container: ControlContainer) {
    if (!this.container) {
      throw new Error('ControlContainer não existe')
    }
  }

  ngOnInit(): void {
    if (this.controlName === '') {
      throw new Error('Informe o controlName')
    }
    this._control = this._getControl(this.controlName)
  }

  private _getControl(name: string) {
    return this.container.control?.get(name) ?? null
  }
}
