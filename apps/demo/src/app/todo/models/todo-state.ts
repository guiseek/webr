import { Filter } from './filter'
import { Todo } from './todo'

export interface TodoState {
  todos: Todo[]
  selectedTodoId: number
  filter: Filter
}
