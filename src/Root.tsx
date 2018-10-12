import 'reflect-metadata';
import * as React from 'react';
import { enableLogging } from 'mobx-logger';
import TodoForm from './modules/todo/TodoForm';
import TodoList from './modules/todo/TodoList';

enableLogging({
  reaction: false,
  action: true,
  transaction: true,
  compute: true,
});

class App extends React.Component {
  render() {
    return (
      <div className="container" data-testid="toggle-container">
        <TodoForm />
        <hr />
        <TodoList />
      </div>
    );
  }
}

export default () => <App />;
