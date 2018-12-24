import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MobxStore, { Store } from './store';

const appStore = new MobxStore();

export const Context = createContext<{ theme: string; store: Store }>({
  theme: '',
  store: appStore
});

ReactDOM.render(
  <Context.Provider
    value={{
      theme: 'dark',
      store: appStore
    }}
  >
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
