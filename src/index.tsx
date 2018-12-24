import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MobxStore, { Store } from './store';
import './index.css';

const appStore = new MobxStore();

export const Context = createContext<{ store: Store }>({
  store: appStore
});

ReactDOM.render(
  <Context.Provider
    value={{
      store: appStore
    }}
  >
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
