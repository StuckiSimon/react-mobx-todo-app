import store from '../src/TodoStore'
import Todo from '../src/Todo';

describe('TodoStore', () => {
  it('creates new todos', () => {
    expect(store.todos.length).toBe(0)
    store.addTodo(new Todo(1, 'todo1', 1, false))
    store.addTodo(new Todo(2, 'todo2', 1, false))
    console.log(store.todos)
    expect(store.todos.length).toBe(2)
    expect(store.todos[0].value).toBe('todo1')
    expect(store.todos[1].value).toBe('todo2')
  })
});
