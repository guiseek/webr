import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core'

@Component({
  selector: '[webr-label]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-content [attr.select]="selectors"></ng-content>
    <ng-content select="span.label"></ng-content>
    <ng-content select="span[webr-error]"></ng-content>
  `,
  styles: [],
})
export class WebrFieldLabelComponent {
  @HostBinding('attr.aria-live')
  addAriaLiveHostAttr = 'polite'

  readonly selectors = [
    'input[webr][type="radio"]',
    'input[webr][type="checkbox"]',
  ].join(',')
}
