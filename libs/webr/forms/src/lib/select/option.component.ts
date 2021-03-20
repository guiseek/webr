import { Component, HostBinding, HostListener, Input } from '@angular/core'
import { WebrSelectComponent } from './select.component'
import { WebrSelectService } from './select.service'
import { Highlightable } from '@angular/cdk/a11y'

@Component({
  selector: 'webr-option',
  template: `{{ value }}`,
})
export class WebrOptionComponent implements Highlightable {
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

  private select: WebrSelectComponent

  constructor(private dropdownService: WebrSelectService) {
    this.select = this.dropdownService.getSelect()
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
