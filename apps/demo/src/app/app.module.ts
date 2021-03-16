import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { ReactiveFormsModule } from '@angular/forms'
import { WebrFormsModule } from '@webr/forms'
// import { NgFormsModule } from '@webr/ng-forms'
import { FormsComponent } from './forms/forms.component'

@NgModule({
  declarations: [AppComponent, HomeComponent, FormsComponent],
  imports: [
    BrowserModule,
    // NgFormsModule,
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
