import React, { Component } from 'react';
import { observer, Observer } from 'mobx-react';
import { Context } from './index';

@observer
class App extends Component {
  render() {
    return (
      <Context.Consumer>
        {ctx => (
          <Observer>
            {() => (
              <div>
                <p>Count: {ctx.store.count}</p>
                <button onClick={ctx.store.increment}>increment</button>
              </div>
            )}
          </Observer>
        )}
      </Context.Consumer>
    );
  }
}
export default App;
