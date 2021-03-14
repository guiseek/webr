import { WebrFormInputModule } from './input/form-input.module'
import { WebrFormGroupModule } from './group/form-group.module'
import { NgModule } from '@angular/core'

@NgModule({
  exports: [
    WebrFormInputModule,
    WebrFormGroupModule,
  ],
})
export class NgFormsModule {}
