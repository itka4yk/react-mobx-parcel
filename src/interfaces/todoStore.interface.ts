export interface ITodoStore {
  todos: string[];
  count: number;
  addTodo(todo: string): void;
}

export const TodoStoreType = Symbol('TodoStore');
