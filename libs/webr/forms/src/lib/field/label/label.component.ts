import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: '[webr-label]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-content [attr.select]="selectors"></ng-content>
    <ng-content select="span.label"></ng-content>
  `,
  styles: [],
})
export class WebrFieldLabelComponent {
  readonly selectors = [
    'input[webr][type="radio"]',
    'input[webr][type="checkbox"]',
  ].join(',')
}
