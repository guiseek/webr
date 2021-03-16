import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: `
    input[webr][type="text"],
    input[webr][type="email"],
    input[webr][type="number"],
    input[webr][type="password"],
    input[webr][type="search"],
    input[webr][type="url"],
    textarea[webr]
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '',
})
export class WebrInputComponent {}
/**
 * Caso precise de algum CSS específico
 * podemos usar o escopo do componente.
 */
