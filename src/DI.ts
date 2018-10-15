import 'reflect-metadata';
import { Container } from 'inversify';

import {
  ITodoStore,
  TodoStoreType,
  ITodoStatisticsStore,
  TodoStatisticsStoreType,
} from './interfaces/todoStore.interface';
import { TodoStore } from './modules/todo';
import { TodoStatisticsStore } from './modules/todo/todo.store';

const container = new Container();

container
  .bind<ITodoStore>(TodoStoreType)
  .to(TodoStore)
  .inSingletonScope();

container
  .bind<ITodoStatisticsStore>(TodoStatisticsStoreType)
  .to(TodoStatisticsStore)
  .inSingletonScope();

export { container };
