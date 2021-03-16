import { WebrFieldLabelComponent } from './field/label/label.component';
import { WebrErrorComponent } from './field/error/error.component';
import { WebrCheckboxComponent } from './input/checkbox.component'
import { WebrInputComponent } from './input/input.component'
import { WebrInputDirective } from './input/input.directive'
import { WebrLabelComponent } from './label/label.component'
import { WebrRadioComponent } from './input/radio.component'
import { WebrFieldComponent } from './field/field.component';
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

@NgModule({
  imports: [CommonModule],
  declarations: [
    WebrInputComponent,
    WebrInputDirective,
    WebrLabelComponent,
    WebrRadioComponent,
    WebrFieldComponent,
    WebrErrorComponent,
    WebrCheckboxComponent,
    WebrFieldLabelComponent,
  ],
  exports: [
    WebrInputComponent,
    WebrInputDirective,
    WebrLabelComponent,
    WebrRadioComponent,
    WebrFieldComponent,
    WebrErrorComponent,
    WebrCheckboxComponent,
    WebrFieldLabelComponent,
  ],
})
export class WebrFormsModule {}