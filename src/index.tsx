import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from './store';
import { observable } from 'mobx';

const appStore = new Store();

export const StoreContext = createContext(appStore);

ReactDOM.render(
  <StoreContext.Provider value={appStore}>
    <App />
  </StoreContext.Provider>,
  document.getElementById('root')
);
