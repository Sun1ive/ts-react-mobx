import React, { Component, useContext } from 'react';
import { observer, Observer } from 'mobx-react';
import { Login } from './pages/Login';
import { Store } from './store';

type Props = {
  store: Store;
};

@observer
class App extends Component<Props> {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}
export default App;
