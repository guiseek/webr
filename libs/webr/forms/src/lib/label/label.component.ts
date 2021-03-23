import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core'
import { WebrLabel } from './label.interface'

@Component({
  selector: 'label[webr]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-content [attr.select]="selectors"></ng-content>
    <ng-content select="span.label"></ng-content>
    <span class="highlight"></span>
    <span class="bar"></span>
    <ng-content select="output[webr][for]"></ng-content>
  `,
})
export class WebrLabelComponent implements WebrLabel {
  @HostBinding('class.webr')
  addingWebrHostClass = true

  @HostBinding('attr.aria-live')
  addAriaLiveHostAttr = 'polite'

  @HostBinding('attr.aria-atomic')
  addingAriaAtomicHostAttr = true

  public readonly selectors = [
    'input[webr][type="text"]',
    'input[webr][type="email"]',
    'input[webr][type="number"]',
    'input[webr][type="password"]',
    'input[webr][type="search"]',
    'input[webr][type="url"]',
    'textarea[webr]',
  ].join(',')
}
/**
 * Usado como container para inputs,
 * labels, errors, talvez algum CSS.
 */
