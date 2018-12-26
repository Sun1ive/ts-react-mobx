import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MobxStore, { Store } from './store';
import './index.css';

const appStore = new MobxStore();

ReactDOM.render(<App store={appStore} />, document.getElementById('root'));
