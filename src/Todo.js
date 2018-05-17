import {
  observable
} from "mobx";

export default class Todo {
  @observable id;
  @observable text;
  @observable categoryId;
  @observable done;

  constructor(id, text, categoryId, done = false) {
    this.id = id;
    this.text = text;
    this.categoryId = categoryId;
    this.done = done;
  }

  toggle() {
    this.done = !this.done;
  }
}