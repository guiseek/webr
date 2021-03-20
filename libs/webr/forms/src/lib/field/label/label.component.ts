import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core'

@Component({
  selector: '[webr-label]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-content [attr.select]="selectors"></ng-content>
    <ng-content select="span.label"></ng-content>
    <ng-content select="output[webr][for]"></ng-content>
  `,
  styles: [],
})
export class WebrFieldLabelComponent {
  @HostBinding('attr.aria-live')
  addAriaLiveHostAttr = 'polite'

  @HostBinding('attr.aria-atomic')
  addingAriaAtomicHostAttr = true

  readonly selectors = [
    'input[webr][type="radio"]',
    'input[webr][type="checkbox"]',
    'input[webr][type="range"]',
  ].join(',')
}
