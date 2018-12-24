import React, { Component, createContext } from 'react';
import { observer, Observer } from 'mobx-react';
import { StoreContext } from './index';

@observer
class App extends Component {
  render() {
    return (
      <StoreContext.Consumer>
        {(store: any) => (
          <Observer>
            {() => (
              <div>
                Hello world
                <p>Count: {store.count}</p>
                <button onClick={store.increment}>increment</button>
              </div>
            )}
          </Observer>
        )}
      </StoreContext.Consumer>
    );
  }
}
export default App;
