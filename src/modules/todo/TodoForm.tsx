import * as React from 'react';
import { InjectProps } from '../../helpers';
import {
  TodoStoreType,
  ITodoStore,
} from '../../interfaces/todoStore.interface';

interface IInjectedProps {
  store: ITodoStore;
}

interface IState {
  todo: string;
}

@InjectProps({ store: TodoStoreType })
class TodoForm extends React.Component<IInjectedProps, IState> {
  constructor(props: Readonly<IInjectedProps>) {
    super(props);
    this.state = {
      todo: '',
    };
  }
  render() {
    return (
      <div>
        <input
          value={this.state.todo}
          onChange={e => this.setState({ todo: e.target.value })}
        />
        <button onClick={() => this.props.store.addTodo(this.state.todo)}>
          Save
        </button>
      </div>
    );
  }
}

export default TodoForm as React.ComponentClass<any>;
