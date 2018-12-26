import React, { Component } from 'react';
import { observer, Observer } from 'mobx-react';
import { Login } from './pages/Login';
import { RootProps } from './Types/Props';

@observer
class App extends Component<RootProps> {
  render() {
    return (
      <div className="container">
        <Login store={this.props.store} />
      </div>
    );
  }
}
export default App;
