import {
  observable,
  computed,
  action
} from "mobx";
import Todo from "./Todo";

class ObservableTodoStore {
  @observable todos = [];
  @observable state = 'offline';

  constructor() {
    this.todos.push(new Todo(1, 'Todo 1', 1, false));
    this.todos.push(new Todo(2, 'Todo 2', 2, false));
  }

  addTodo(task) {
    this.todos.push({
      task: task,
      completed: false,
      assignee: null
    });
  }

  @action.bound
  toggle(taskId) {
    this.state = 'syncing';
    const todo = this.todos.find(todo => todo.id === taskId);

    todo.done = !todo.done;
  }
}

export default new ObservableTodoStore();