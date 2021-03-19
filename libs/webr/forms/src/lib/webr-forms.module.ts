import { WebrFieldLabelComponent } from './field/label/label.component'
import { WebrTextareaDirective } from './input/textarea.directive'
import { WebrCheckboxComponent } from './input/checkbox.component'
import { WebrOutputComponent } from './output/output.component'
import { WebrInputComponent } from './input/input.component'
import { WebrInputDirective } from './input/input.directive'
import { WebrLabelComponent } from './label/label.component'
import { WebrRadioComponent } from './input/radio.component'
import { WebrFieldComponent } from './field/field.component'
import { WebrRangeComponent } from './input/range.component'
import { WebrFormDirective } from './form.directive'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

@NgModule({
  imports: [CommonModule],
  declarations: [
    WebrFormDirective,
    WebrInputComponent,
    WebrInputDirective,
    WebrLabelComponent,
    WebrRadioComponent,
    WebrFieldComponent,
    WebrCheckboxComponent,
    WebrTextareaDirective,
    WebrFieldLabelComponent,
    WebrRangeComponent,
    WebrOutputComponent,
  ],
  exports: [
    WebrFormDirective,
    WebrInputComponent,
    WebrInputDirective,
    WebrLabelComponent,
    WebrRadioComponent,
    WebrFieldComponent,
    WebrCheckboxComponent,
    WebrTextareaDirective,
    WebrFieldLabelComponent,
    WebrRangeComponent,
    WebrOutputComponent,
  ],
})
export class WebrFormsModule {}
