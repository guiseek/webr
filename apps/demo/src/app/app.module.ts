import { BrowserModule } from '@angular/platform-browser'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

import { WebrIconsModule, ICONS } from '@webr/icons'
import { WebrFormsModule } from '@webr/forms'
import { WebrMaskModule } from '@webr/mask'

import { FormsComponent } from './forms/forms.component'
import { AppComponent } from './app.component'
import { IconsComponent } from './icons/icons.component'
import { MaskComponent } from './mask/mask.component'
import { HttpClientModule } from '@angular/common/http'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { TodosData } from './todo/services/api/todos-data'

@NgModule({
  declarations: [AppComponent, FormsComponent, IconsComponent, MaskComponent],
  imports: [
    BrowserModule,
    WebrMaskModule,
    WebrFormsModule,
    HttpClientModule,
    HttpClientModule,
    ReactiveFormsModule,
    WebrIconsModule.forRoot({
      icons: ICONS,
      sizes: {
        md: '24px',
      },
    }),
    HttpClientInMemoryWebApiModule.forRoot(TodosData, {
      delay: 500,
      put204: false,
    }),
    RouterModule.forRoot([
      { path: '', redirectTo: 'todo', pathMatch: 'full' },
      { path: 'forms', component: FormsComponent },
      { path: 'icons', component: IconsComponent },
      { path: 'mask', component: MaskComponent },
      {
        path: 'todo',
        loadChildren: () =>
          import('./todo/todo.module').then((m) => m.TodoModule),
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
