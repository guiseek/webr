import { WebrInputCheckboxComponent } from './input-checkbox.component'
import { WebrInputRadioComponent } from './input-radio.component'
import { WebrInputComponent } from './input.component'
import { WebrInputDirective } from './input.directive'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

@NgModule({
  declarations: [
    WebrInputDirective,
    WebrInputComponent,
    WebrInputRadioComponent,
    WebrInputCheckboxComponent,
  ],
  imports: [CommonModule],
  exports: [
    WebrInputDirective,
    WebrInputComponent,
    WebrInputRadioComponent,
    WebrInputCheckboxComponent,
  ],
})
export class WebrFormInputModule {}
