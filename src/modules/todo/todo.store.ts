import { observable, computed, action, when } from 'mobx';
import { injectable } from 'inversify';
import { ITodoStore } from '../../interfaces/todoStore.interface';

@injectable()
export class TodoStore implements ITodoStore {
  @observable
  todos: string[] = [];

  @computed
  get count() {
    return this.todos.length;
  }

  @action
  addTodo(task: string) {
    this.todos.push(task);
  }
}
