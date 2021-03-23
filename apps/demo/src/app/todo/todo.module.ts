import { TodoDetailComponent } from './components/todo-detail/todo-detail.component'
import { TodoListComponent } from './components/todo-list/todo-list.component'
import { FilterComponent } from './components/filter/filter.component'
import { Routes, RouterModule } from '@angular/router'
import { WebrIconsModule, ICONS } from '@webr/icons'
import { ReactiveFormsModule } from '@angular/forms'
import { TodoContainer } from './todo.container'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { WebrFormsModule } from '@webr/forms'
import { NgModule } from '@angular/core'

const routes: Routes = [{ path: '', component: TodoContainer }]

@NgModule({
  declarations: [
    TodoContainer,
    FilterComponent,
    TodoDetailComponent,
    TodoListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    WebrFormsModule,
    WebrIconsModule.forRoot({
      icons: ICONS,
      sizes: {
        md: '24px',
      },
    }),
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
})
export class TodoModule {}
