import React, { Component, SyntheticEvent } from 'react';
import { observer, Observer } from 'mobx-react';
import './index.css';
import { RootProps } from '../../Types/Props';

type InputHandler = {
  value: string | number;
  property: keyof LoginState;
};

type LoginState = {
  email: string;
  password: string;
};

@observer
export class Login extends Component<RootProps, LoginState> {
  state = {
    email: '',
    password: ''
  };

  inputHandler = ({ property, value }: InputHandler) => {
    // @ts-ignore
    this.setState({
      [property]: value
    });
  };

  onSubmitHanlder = async (event: SyntheticEvent) => {
    event.preventDefault();

    await this.props.store.onSignIn({
      email: this.state.email,
      password: this.state.password
    });
  };

  render() {
    const isFetched =
      this.props.store.auth && this.props.store.auth.accessToken.length > 0 ? (
        <div>{this.props.store.auth.accessToken}</div>
      ) : (
        <div>Loading ...</div>
      );

    return (
      <div className="login-container">
        <h1>{isFetched}</h1>
        <form className="form" onSubmit={this.onSubmitHanlder}>
          <input
            onChange={event =>
              this.inputHandler({
                value: event.target.value,
                property: 'email'
              })
            }
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
