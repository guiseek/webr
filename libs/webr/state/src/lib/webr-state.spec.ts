import { Observable, of } from 'rxjs'
import { map, shareReplay } from 'rxjs/operators'
import { WebrState } from './webr-state'

export interface Filter {
  search: string
  category: {
    isBusiness: boolean
    isPrivate: boolean
  }
}

export class Todo {
  id: number
  title: string
  isDone: boolean
  isBusiness?: boolean
  isPrivate?: boolean
}

interface TodoState {
  todos: Todo[]
  selectedTodoId: number
  filter: Filter
}

const initialState: TodoState = {
  todos: [],
  selectedTodoId: undefined,
  filter: {
    search: '',
    category: {
      isBusiness: false,
      isPrivate: false,
    },
  },
}

function getTodosFiltered(todos: Todo[], filter: Filter): Todo[] {
  return todos.filter((item) => {
    return (
      item.title.toUpperCase().indexOf(filter.search.toUpperCase()) > -1 &&
      (filter.category.isBusiness ? item.isBusiness : true) &&
      (filter.category.isPrivate ? item.isPrivate : true)
    )
  })
}

export class TodosApiService {
  todos: Todo[] = [
    {
      id: 1,
      title: 'TODO 1',
      isDone: false,
      isPrivate: true,
    },
    {
      id: 2,
      title: 'TODO 2',
      isDone: false,
    },
    {
      id: 3,
      title: 'TODO 3',
      isDone: true,
      isBusiness: true,
    },
  ]
  getTodos(): Observable<Todo[]> {
    return of(this.todos)
  }

  createTodo(todo: Todo): Observable<Todo> {
    this.todos.push(todo)
    return of(todo)
  }

  updateTodo(todo: Todo): Observable<Todo> {
    const todoIndex = this.getTodoIndex(todo)
    const updated = (this.todos[todoIndex] = todo)
    return of(updated)
  }

  deleteTodo(todo: Todo): Observable<void> {
    const todoIndex = this.getTodoIndex(todo)
    this.todos.splice(todoIndex, 1)
    return
  }

  private getTodoIndex(todo: Todo) {
    return this.todos.findIndex((t) => t.id === todo.id)
  }
}

export class TodosStateService extends WebrState<TodoState> {
  private todosFiltered$: Observable<Todo[]> = this.select((state) => {
    return getTodosFiltered(state.todos, state.filter)
  })

  todosDone$: Observable<Todo[]> = this.todosFiltered$.pipe(
    map((todos) => todos.filter((todo) => todo.isDone))
  )

  todosNotDone$: Observable<Todo[]> = this.todosFiltered$.pipe(
    map((todos) => todos.filter((todo) => !todo.isDone))
  )

  filter$: Observable<Filter> = this.select((state) => state.filter)
  selectedTodo$: Observable<Todo> = this.select((state) => {
    if (state.selectedTodoId === 0) {
      return new Todo()
    }
    return state.todos.find((item) => item.id === state.selectedTodoId)
  }).pipe(
    // Multicast to prevent multiple executions due to multiple subscribers
    shareReplay({ refCount: true, bufferSize: 1 })
  )

  constructor(private apiService: TodosApiService) {
    super(initialState)

    this.load()
  }

  selectTodo(todo: Todo) {
    this.setState({ selectedTodoId: todo.id })
  }

  initNewTodo() {
    this.setState({ selectedTodoId: 0 })
  }

  clearSelectedTodo() {
    this.setState({ selectedTodoId: undefined })
  }

  updateFilter(filter: Filter) {
    this.setState({
      filter: {
        ...this.state.filter,
        ...filter,
      },
    })
  }

  // API CALLS
  load() {
    this.apiService.getTodos().subscribe((todos) => this.setState({ todos }))
  }

  create(todo: Todo) {
    this.apiService.createTodo(todo).subscribe((newTodo) => {
      this.setState({
        todos: [...this.state.todos, newTodo],
        selectedTodoId: newTodo.id,
      })
    })
  }

  update(todo: Todo) {
    this.apiService.updateTodo(todo).subscribe((updatedTodo) => {
      this.setState({
        todos: this.state.todos.map((item) =>
          item.id === todo.id ? updatedTodo : item
        ),
      })
    })
  }

  delete(todo: Todo) {
    this.apiService.deleteTodo(todo).subscribe(() => {
      this.setState({
        selectedTodoId: undefined,
        todos: this.state.todos.filter((item) => item.id !== todo.id),
      })
    })
  }
}

describe('webrState', () => {
  let api: TodosApiService
  let service: TodosStateService

  beforeEach(() => {
    api = new TodosApiService()
    service = new TodosStateService(api)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  it('should be an WebrState instance', () => {
    expect(service).toBeInstanceOf(WebrState)
  })

  it('should be an WebrState instance', () => {
    expect(service).toBeInstanceOf(WebrState)
  })

  it('should be an WebrState instance', () => {
    expect(service).toBeInstanceOf(WebrState)
  })

  it('should be an WebrState instance', () => {
    expect(service).toBeInstanceOf(WebrState)
  })

  it('should be an WebrState instance', () => {
    expect(service).toBeInstanceOf(WebrState)
  })
})
