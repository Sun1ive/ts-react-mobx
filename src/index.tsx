import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MobxStore, { Store } from './store';

const appStore = new MobxStore();

export const StoreContext = createContext<Store>(appStore);

ReactDOM.render(
  <StoreContext.Provider value={appStore}>
    <App />
  </StoreContext.Provider>,
  document.getElementById('root')
);
