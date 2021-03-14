import { WebrErrorComponent } from './error/error.component'
import { WebrFieldComponent } from './field/field.component'
import { WebrLabelComponent } from './label/label.component'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

@NgModule({
  declarations: [WebrLabelComponent, WebrFieldComponent, WebrErrorComponent],
  exports: [WebrLabelComponent, WebrFieldComponent, WebrErrorComponent],
  imports: [CommonModule],
})
export class WebrFormGroupModule {}
