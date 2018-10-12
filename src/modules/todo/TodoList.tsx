import * as React from 'react';
import {
  ITodoStore,
  TodoStoreType,
} from '../../interfaces/todoStore.interface';
import { InjectProps } from '../../helpers';
import { observer } from 'mobx-react';

interface IInjectedProps {
  todos: string[];
  count(): number;
  store: ITodoStore;
}

@InjectProps({ store: TodoStoreType }, ({ store }) => ({
  store,
  todos: store.todos,
  count: () => store.count,
}))
class TodoList extends React.Component<IInjectedProps> {
  render() {
    return (
      <div>
        Count: {this.props.count()}
        <br />
        {this.props.todos.map((t, i) => (
          <p key={i}>{t}</p>
        ))}
      </div>
    );
  }
}

export default TodoList as React.ComponentClass<any>;
