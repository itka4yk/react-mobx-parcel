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
  todoType: string;
  todoBody: string;
}

@InjectProps({ store: TodoStoreType })
class TodoForm extends React.Component<IInjectedProps, IState> {
  state: IState = {
    todoType: '',
    todoBody: '',
  };
  render() {
    return (
      <div>
        <label>Type:</label>
        <input
          value={this.state.todoType}
          onChange={e => this.setState({ todoType: e.target.value })}
        />
        <br />
        <label>Body:</label>
        <input
          value={this.state.todoBody}
          onChange={e => this.setState({ todoBody: e.target.value })}
        />
        <button
          onClick={() =>
            this.props.store.addTodo(this.state.todoType, this.state.todoBody)
          }
        >
          Save
        </button>
      </div>
    );
  }
}

export default TodoForm as React.ComponentClass<any>;
