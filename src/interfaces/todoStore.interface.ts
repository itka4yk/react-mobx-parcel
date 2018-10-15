export interface ITodo {
  type: string;
  body: string;
}

export interface ITodoStore {
  todos: ITodo[];
  addTodo(type: string, body: string): void;
  count: number;
  todoTypes: number;
  shortCount: number;
}

export const TodoStoreType = Symbol('TodoStore');

export interface ITodoStatisticsStore {
  count: number;
  typeCount: number;
}

export const TodoStatisticsStoreType = Symbol('TodoStatisticsStore');
