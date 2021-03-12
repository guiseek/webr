import { WebrFieldComponent } from './field/field.component'
import { WebrLabelComponent } from './label/label.component'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

@NgModule({
  declarations: [WebrLabelComponent, WebrFieldComponent],
  exports: [WebrLabelComponent, WebrFieldComponent],
  imports: [CommonModule],
})
export class WebrFormGroupModule {}
