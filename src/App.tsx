import React, { Component } from 'react';
import { observer, Observer } from 'mobx-react';
import { Context } from './index';
import { Login } from './pages/Login';

@observer
class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <Login />
      </div>
    );
  }
}
export default App;
