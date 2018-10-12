import 'reflect-metadata';

import { Container } from 'inversify';
import { ITodoStore, TodoStoreType } from './interfaces/todoStore.interface';
import { TodoStore } from './modules/todo';

const container = new Container();
container
  .bind<ITodoStore>(TodoStoreType)
  .to(TodoStore)
  .inSingletonScope();

export { container };
