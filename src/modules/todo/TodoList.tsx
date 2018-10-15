import * as React from 'react';
import {
  ITodoStore,
  TodoStoreType,
  TodoStatisticsStoreType,
  ITodo,
  ITodoStatisticsStore,
} from '../../interfaces/todoStore.interface';
import { InjectProps } from '../../helpers';
import { observer } from 'mobx-react';

interface IInjectedProps {
  todos: ITodo[];
  count(): number;
  store: ITodoStore;
  stats: ITodoStatisticsStore;
  typeCount(): number;
}

@InjectProps(
  { store: TodoStoreType, stats: TodoStatisticsStoreType },
  ({ store, stats }) => ({
    store,
    stats,
    todos: store.todos,
    count: () => store.count,
    typeCount: () => stats.typeCount,
  }),
)
class TodoList extends React.Component<IInjectedProps> {
  render() {
    return (
      <div>
        Count: {this.props.count()}
        <br />
        {this.props.todos.map((t, i) => (
          <p key={i}>
            <strong>{t.type}</strong>: {t.body}
          </p>
        ))}
        <br />
        Types count: {this.props.typeCount()}
      </div>
    );
  }
}

export default TodoList as React.ComponentClass<any>;
