import { WebrFieldLabelComponent } from './field/label/label.component'
import { WebrTextareaDirective } from './input/textarea.directive'
import { WebrCheckboxComponent } from './input/checkbox.component'
import { WebrOutputComponent } from './output/output.component'

import { WebrSelectPanelComponent } from './select/select-panel.component'
import { WebrOptionComponent } from './select/option.component'
import { WebrSelectComponent } from './select/select.component'

import { WebrInputComponent } from './input/input.component'
import { WebrInputDirective } from './input/input.directive'
import { WebrLabelComponent } from './label/label.component'
import { WebrRadioComponent } from './input/radio.component'
import { WebrFieldComponent } from './field/field.component'
import { WebrRangeComponent } from './input/range.component'
import { WebrFormDirective } from './form.directive'
import { OverlayModule } from '@angular/cdk/overlay'
import { PortalModule } from '@angular/cdk/portal'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

@NgModule({
  imports: [CommonModule, OverlayModule, PortalModule],
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
    WebrSelectComponent,
    WebrOptionComponent,
    WebrSelectPanelComponent,
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
    WebrSelectComponent,
    WebrOptionComponent,
    WebrSelectPanelComponent,
  ],
})
export class WebrFormsModule {}
