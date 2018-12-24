import React, { Component, SyntheticEvent } from 'react';
import { Context } from '../../index';
import './index.css';

type InputHandler = {
  value: string | number;
  property: string;
};

export class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  onLogInHanlder = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log(this);
  };

  inputHandler = ({ property, value }: InputHandler) => {
    this.setState({
      [property]: value
    });
  };

  render() {
    return (
      <Context.Consumer>
        {ctx => (
          <div className="login-container">
            <form
              className="form"
              onSubmit={event => {
                event.preventDefault();
                ctx.store.onSignIn({
                  email: this.state.email,
                  password: this.state.password
                });
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
        )}
      </Context.Consumer>
    );
  }
}
