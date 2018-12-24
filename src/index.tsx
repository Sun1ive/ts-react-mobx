import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from './store';

const appStore = new Store();

ReactDOM.render(<App store={appStore} />, document.getElementById('root'));
