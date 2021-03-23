import { TodosStateService } from './../../services/todos-state.service'
import { Component, Input, OnInit } from '@angular/core'
import { Todo } from './../../models/todo'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'webr-todo-detail',
  templateUrl: './todo-detail.component.html',
})
export class TodoDetailComponent implements OnInit {
  @Input()
  todo: Todo

  constructor(private todosService: TodosStateService) {}

  ngOnInit() {}

  submit(form: NgForm) {
    const newTodo: Todo = {
      ...this.todo,
      ...form.value,
    }

    if (newTodo.id) {
      this.todosService.update(newTodo)
    } else {
      this.todosService.create(newTodo)
    }
  }

  delete() {
    this.todosService.delete(this.todo)
  }

  onClose() {
    this.todosService.clearSelectedTodo()
  }
}
