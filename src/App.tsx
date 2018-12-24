import React from 'react';
import { observer } from 'mobx-react';
import { Store } from './store';

interface props {
  store: Store;
}

@observer
class App extends React.Component<props> {
  render() {
    const { count, increment } = this.props.store;
    return (
      <div>
        Hello world
        <p>Count: {count}</p>
        <button onClick={increment}>increment</button>
      </div>
    );
  }
}

export default App;
