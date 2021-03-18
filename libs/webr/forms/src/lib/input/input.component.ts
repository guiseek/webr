import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: `
    input[voxel][type="text"],
    input[voxel][type="email"],
    input[voxel][type="number"],
    input[voxel][type="password"],
    input[voxel][type="search"],
    input[voxel][type="url"],
    textarea[voxel]
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '',
})
export class WebrInputComponent {}
/**
 * Caso precise de algum CSS específico
 * podemos usar o escopo do componente.
 */
