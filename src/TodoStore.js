import {
  observable,
  computed,
  action
} from "mobx";
import Todo from "./Todo";

const endpoint = 'https://node-js-todo-app.herokuapp.com';

const fetchOptions = {
  mode: 'cors'
}

class ObservableTodoStore {
  @observable todos = [];
  @observable state = 'offline';

  constructor() {
    fetch(`${endpoint}/todos`, {
      ...fetchOptions,
      method: 'GET'
    }).then((response) => response.json()).then(todos => {
      todos.forEach(({ id, categoryId, text, done}) => {
        this.todos.push(new Todo(id, text, categoryId, done));
      });
      this.state = 'online';
    });
  }

  @action.bound
  addTodo({ id = new Date(), categoryId, text, done}) {
    this.state = 'syncing';
    const todo = new Todo(id, text, categoryId, done);
    this.todos.push(todo);
    fetch(`${endpoint}/todos`, {
      ...fetchOptions,
      method: 'POST',
      body: JSON.stringify({
        id,
        categoryId,
        text,
        done
      })
    }).then((response) => response.json()).then(serverTodo => {
      todo.id = serverTodo.id;
      todo.text = serverTodo.text;
      todo.categoryId = serverTodo.categoryId;
      todo.done = serverTodo.done;
      this.state = 'online';
    });
  }

  @action.bound
  toggle(taskId) {
    this.state = 'syncing';
    const todo = this.todos.find(todo => todo.id === taskId);

    todo.toggle();

    fetch(`${endpoint}/todos/${taskId}`, {
      ...fetchOptions,
      method: 'PATCH',
      body: JSON.stringify(todo)
    }).then(() => {
      this.state = 'online';
    });
  }
}

export default new ObservableTodoStore();