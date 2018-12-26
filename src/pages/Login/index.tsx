import React, { Component, createContext } from 'react';
import { observer, Observer } from 'mobx-react';
import './index.css';

type InputHandler = {
  value: string | number;
  property: string;
};

@observer
export class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  inputHandler = ({ property, value }: InputHandler) => {
    this.setState({
      [property]: value
    });
  };

  render() {
    return (
      <div className="login-container">
        <form
          className="form"
          onSubmit={event => {
            event.preventDefault();
          }}
        >
          <input
            onChange={event => this.setState({ email: event.target.value })}
            className="form-input"
          />
          <input
            className="form-input"
            onChange={event =>
              this.inputHandler({
                value: event.target.value,
                property: 'password'
              })
            }
          />
          <button type="submit" className="form-submit">
            Sign in
          </button>
        </form>
      </div>
    );
  }
}
