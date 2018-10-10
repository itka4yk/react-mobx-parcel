import * as React from 'react';
import { observable, computed } from 'mobx';
import { observer } from 'mobx-react';

interface ISampleStore {
  todos: string[];
}

class SampleStore implements ISampleStore {
  @observable todos: string[] = [];

  @computed get total() {
    return this.todos.length;
  }

  addTodo(task: string) {
		this.todos.push(task);
	}
}

interface IProps {
  store: ISampleStore;
}

@observer
class App extends React.Component<IProps> {
  render() {
    const store = this.props.store;
    console.log('STORE', store.todos);
    return (
      <div className="container" data-testid="toggle-container" >
        Hi!

      </div>
    );
  }
}

const store = new SampleStore();

const Root = () => <App store={store}/>

export default Root
