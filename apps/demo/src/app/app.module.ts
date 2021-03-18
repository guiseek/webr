import { BrowserModule } from '@angular/platform-browser'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

import { WebrIconsModule, ICONS } from '@webr/icons'
import { WebrFormsModule } from '@webr/forms'
import { WebrMaskModule } from '@webr/mask'

import { FormsComponent } from './forms/forms.component'
import { AppComponent } from './app.component'
import { IconsComponent } from './icons/icons.component';
import { MaskComponent } from './mask/mask.component'

@NgModule({
  declarations: [AppComponent, FormsComponent, IconsComponent, MaskComponent],
  imports: [
    BrowserModule,
    WebrMaskModule,
    WebrFormsModule,
    ReactiveFormsModule,
    WebrIconsModule.forRoot({
      icons: ICONS,
      sizes: {
        md: '24px',
      },
    }),
    RouterModule.forRoot([
      { path: '', component: FormsComponent },
      { path: 'icons', component: IconsComponent },
      { path: 'mask', component: MaskComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
