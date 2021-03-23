import { Highlightable } from '@angular/cdk/a11y'
import { WebrSelect } from './select.interface'

export interface WebrOption extends Highlightable {
  key: string

  value: string

  selected: boolean

  active: boolean

  select: WebrSelect

  getLabel: () => string

  setActiveStyles: () => void

  setInactiveStyles: () => void

  onClick: (event: UIEvent) => void
}
