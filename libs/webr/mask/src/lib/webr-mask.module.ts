import { WebrCurrencyMaskDirective } from './currency-mask.directive'
import { WebrMaskDirective } from './mask.directive'
import { NgModule } from '@angular/core'

@NgModule({
  declarations: [WebrMaskDirective, WebrCurrencyMaskDirective],
  exports: [WebrMaskDirective, WebrCurrencyMaskDirective],
})
export class WebrMaskModule {}
