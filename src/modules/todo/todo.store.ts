import { observable, computed, action, when, reaction, autorun } from 'mobx';
import { injectable, inject } from 'inversify';
import {
  ITodoStore,
  ITodoStatisticsStore,
  TodoStoreType,
  ITodo,
  TodoStatisticsStoreType,
} from '../../interfaces/todoStore.interface';

@injectable()
export class TodoStore implements ITodoStore {
  @observable
  todos: ITodo[] = [];

  @computed
  get count() {
    return this.todos.length;
  }

  @computed
  get shortCount(): number {
    return this.todos.filter(t => t.body.length <= 2).length;
  }

  @computed
  get todoTypes(): number {
    return Array.from(new Set(this.todos.map(t => t.type))).length;
  }

  @action
  addTodo(type: string, body: string) {
    this.todos.push({ type, body });
  }

  @action
  clear() {
    this.todos.length = 0;
  }
}

@injectable()
export class TodoStatisticsStore implements ITodoStatisticsStore {
  @observable
  count: number = 0;
  @observable
  typeCount: number = 0;

  constructor(@inject(TodoStoreType) private readonly todoStore: ITodoStore) {
    autorun(() => console.log('TODO STORE COUNT', this.todoStore.count));

    reaction(() => this.todoStore.count, data => (this.count = data), {
      fireImmediately: true,
      name: 'new count',
    });
    reaction(() => this.todoStore.todoTypes, data => (this.typeCount = data), {
      fireImmediately: true,
      name: 'new type count',
    });
  }
}
