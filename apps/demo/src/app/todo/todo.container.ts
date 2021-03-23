import { TodosStateService } from './services/todos-state.service'
import { Component } from '@angular/core'
import { Filter } from './models/filter'
import { Todo } from './models/todo'
import { Observable } from 'rxjs'

@Component({
  selector: 'webr-todo',
  templateUrl: './todo.container.html',
})
export class TodoContainer {
  todosDone$: Observable<Todo[]> = this.todosState.todosDone$
  todosNotDone$: Observable<Todo[]> = this.todosState.todosNotDone$
  selectedTodo$: Observable<Todo> = this.todosState.selectedTodo$
  filter$: Observable<Filter> = this.todosState.filter$

  constructor(private todosState: TodosStateService) {}

  selectTodo(todo: Todo) {
    this.todosState.selectTodo(todo)
  }

  addTodo() {
    this.todosState.initNewTodo()
  }

  onFilterUpdate(filter: Filter) {
    this.todosState.updateFilter(filter)
  }
}
