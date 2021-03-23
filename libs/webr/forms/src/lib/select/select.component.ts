// import { WebrOptionComponent } from './interfaces/option.interface';
import { ControlValueAccessor } from '../types/control-value-accessor'
import { WebrSelectPanelComponent } from './select-panel.component'
import { ActiveDescendantKeyManager } from '@angular/cdk/a11y'
import { WebrSelect } from './interfaces/select.interface'
import { WebrOptionComponent } from './option.component'
import { WebrSelectService } from './select.service'
import { NG_VALUE_ACCESSOR } from '@angular/forms'
import {
  Input,
  ViewChild,
  Component,
  ElementRef,
  QueryList,
  forwardRef,
  ContentChildren,
  AfterContentInit,
  ChangeDetectorRef,
} from '@angular/core'

const WebrSelectProvider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => WebrSelectComponent),
  multi: true,
}

@Component({
  selector: 'webr-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [WebrSelectService, WebrSelectProvider],
})
export class WebrSelectComponent
  implements WebrSelect, AfterContentInit, ControlValueAccessor {
  @Input()
  public label = ''

  @Input()
  public placeholder = ''

  @Input()
  public selected = ''

  @Input()
  public required = false

  @Input()
  public disabled = false

  @ViewChild('input')
  public input!: ElementRef

  @ViewChild(WebrSelectPanelComponent)
  public panel!: WebrSelectPanelComponent

  @ContentChildren(WebrOptionComponent)
  public options!: QueryList<WebrOptionComponent>

  public selectedOption!: WebrOptionComponent

  private _displayText: string = ''
  public get displayText(): string {
    return this._displayText
  }
  public set displayText(value: string) {
    this._displayText = value
  }

  public onChangeFn = (_: any) => {}

  public onTouchedFn = () => {}

  private _keyManager!: ActiveDescendantKeyManager<WebrOptionComponent>

  public get keyManager(): ActiveDescendantKeyManager<WebrOptionComponent> {
    return this._keyManager
  }
  public set keyManager(
    value: ActiveDescendantKeyManager<WebrOptionComponent>
  ) {
    this._keyManager = value
  }

  constructor(
    readonly panelService: WebrSelectService,
    private _changeDetectorRef: ChangeDetectorRef
  ) {
    this.panelService.register(this)
    this.keyManager = this.getKeyManager()
  }

  public ngAfterContentInit() {
    this.selectedOption = this.options
      .toArray()
      .find((option) => option.key === this.selected) as WebrOptionComponent

    this.displayText = this.selectedOption ? this.selectedOption.value : ''
    this.keyManager = this.getKeyManager()
  }

  getKeyManager() {
    return new ActiveDescendantKeyManager(this.options)
      .withHorizontalOrientation('ltr')
      .withVerticalOrientation()
      .withWrap()
  }
  public showPanel() {
    this.panel.show()

    if (!this.options.length) {
      return
    }

    this.selected
      ? this.keyManager.setActiveItem(this.selectedOption)
      : this.keyManager.setFirstItemActive()
  }

  public hidePanel() {
    this.panel.hide()
  }

  public onPanelMenuIconClick(event: UIEvent) {
    this.input.nativeElement.focus()
    this.input.nativeElement.click()
    this._changeDetectorRef.detectChanges()
  }

  public onKeyDown(event: KeyboardEvent) {
    let KEYS = ['Enter', ' ', 'ArrowDown', 'Down', 'ArrowUp', 'Up']
    if (KEYS.indexOf(event.key) > -1) {
      if (!this.panel.showing) {
        this.showPanel()
        return
      }

      if (!this.options.length) {
        event.preventDefault()
        return
      }
    }

    KEYS = [
      'Up',
      'ArrowUp',
      'Down',
      'ArrowDown',
      'ArrowRight',
      'Right',
      'ArrowLeft',
      'Left',
    ]
    if (event.key === 'Enter' || event.key === ' ') {
      this.selectedOption = this.keyManager.activeItem as WebrOptionComponent
      this.selected = this.selectedOption.key
      this.displayText = this.selectedOption ? this.selectedOption.value : ''
      this.hidePanel()
      this.onChange()
      event.preventDefault()
    } else if (event.key === 'Escape' || event.key === 'Esc') {
      this.panel.showing && this.hidePanel()
    } else if (KEYS.indexOf(event.key) > -1) {
      this.keyManager.onKeydown(event)
    } else if (
      event.key === 'PageUp' ||
      event.key === 'PageDown' ||
      event.key === 'Tab'
    ) {
      this.panel.showing && event.preventDefault()
    }
  }

  public selectOption(option: WebrOptionComponent) {
    this.keyManager.setActiveItem(option)
    this.selected = option.key
    this.selectedOption = option
    this.displayText = this.selectedOption ? this.selectedOption.value : ''
    this.hidePanel()
    this.input.nativeElement.focus()
    this.onChange()
  }

  public registerOnChange(fn: any): void {
    this.onChangeFn = fn
  }

  public registerOnTouched(fn: any): void {
    this.onTouchedFn = fn
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled
  }

  public writeValue(obj: any): void {
    this.selected = obj
  }

  public onTouched() {
    this.onTouchedFn()
  }

  public onChange() {
    this.onChangeFn(this.selected)
  }
}
