import { BrowserModule } from '@angular/platform-browser'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

import { WebrIconsModule, ICONS } from '@webr/icons'
import { WebrFormsModule } from '@webr/forms'

import { FormsComponent } from './forms/forms.component'
import { AppComponent } from './app.component'
import { IconsComponent } from './icons/icons.component'

@NgModule({
  declarations: [AppComponent, FormsComponent, IconsComponent],
  imports: [
    BrowserModule,
    WebrFormsModule,
    ReactiveFormsModule,
    WebrIconsModule.forRoot({
      icons: ICONS,
      sizes: {
        md: '24px',
      },
    }),
    RouterModule.forRoot([
      { path: 'forms', component: FormsComponent },
      { path: '', component: IconsComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
