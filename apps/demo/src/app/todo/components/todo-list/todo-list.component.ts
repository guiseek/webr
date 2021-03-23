import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Todo } from './../../models/todo'

@Component({
  selector: 'webr-todo-list',
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent {
  @Input()
  todos: Todo[]

  @Input()
  selectedTodo: Todo

  @Output()
  selectTodo: EventEmitter<Todo> = new EventEmitter()
}
