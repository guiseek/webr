import { WebrSelectPanelComponent } from '../select-panel.component'
import { ActiveDescendantKeyManager } from '@angular/cdk/a11y'
import { ElementRef, QueryList } from '@angular/core'
import { ControlValueAccessor } from '@angular/forms'
import { WebrOption } from './option.interface'
import { WebrOptionComponent } from '../option.component'

export interface WebrSelect extends ControlValueAccessor {
  label: string

  placeholder: string

  selected: string

  required: boolean

  disabled: boolean

  input: ElementRef<HTMLSelectElement>

  panel: WebrSelectPanelComponent

  options: QueryList<WebrOptionComponent>

  selectedOption: WebrOption

  displayText: string

  keyManager: ActiveDescendantKeyManager<WebrOption>

  onChangeFn: (_: any) => void

  onTouchedFn: () => void

  ngAfterContentInit: () => void

  showPanel: () => void

  hidePanel: () => void

  onPanelMenuIconClick: (event: UIEvent) => void

  onKeyDown: (event: KeyboardEvent) => void

  selectOption: (option: WebrOptionComponent) => void

  registerOnChange: (fn: any) => void

  registerOnTouched: (fn: any) => void

  setDisabledState: (isDisabled: boolean) => void

  writeValue: (obj: any) => void

  onTouched: () => void

  onChange: () => void
}
