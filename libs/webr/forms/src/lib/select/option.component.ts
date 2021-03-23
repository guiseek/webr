import { Component, HostBinding, HostListener, Input } from '@angular/core'
import { WebrOption } from './interfaces/option.interface'
import { WebrSelectComponent } from './select.component'
import { WebrSelectService } from './select.service'
import { Highlightable } from '@angular/cdk/a11y'
import { WebrSelect } from './interfaces/select.interface'

@Component({
  selector: 'webr-option',
  template: `{{ value }}`,
})
export class WebrOptionComponent implements WebrOption, Highlightable {
  @Input()
  public key!: string

  @Input()
  public value!: string

  @HostBinding('class.selected')
  public get selected(): boolean {
    return this.select.selectedOption === this
  }

  @HostBinding('class.active')
  public active = false

  private _select: WebrSelect

  public get select(): WebrSelect {
    return this._select
  }

  public set select(value: WebrSelect) {
    this._select = value
  }

  constructor(private dropdownService: WebrSelectService) {
    this._select = this.dropdownService.getSelect()
  }

  public getLabel(): string {
    return this.value
  }

  public setActiveStyles(): void {
    this.active = true
  }

  public setInactiveStyles(): void {
    this.active = false
  }

  @HostListener('click', ['$event'])
  public onClick(event: UIEvent) {
    event.preventDefault()
    event.stopPropagation()
    this.select.selectOption(this)
  }
}
