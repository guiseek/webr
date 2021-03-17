import { BrowserModule } from '@angular/platform-browser'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

import { WebrFormsModule } from '@webr/forms'

import { FormsComponent } from './forms/forms.component'
import { HomeComponent } from './home/home.component'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent, HomeComponent, FormsComponent],
  imports: [
    BrowserModule,
    WebrFormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: '',
        component: FormsComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
