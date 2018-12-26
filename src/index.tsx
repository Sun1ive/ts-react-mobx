import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MobxStore, { Context } from './store';
import './index.css';

const appStore = new MobxStore();

ReactDOM.render(
  <Context.Provider value={{ store: appStore }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
