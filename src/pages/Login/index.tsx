import React, { Component, SyntheticEvent } from 'react';
import { observer } from 'mobx-react';
import Grid from '@material-ui/core/Grid';
import './index.css';
import { Context } from '../../store';

type InputHandler = {
  value: string | number;
  property: keyof LoginState;
};

type LoginState = {
  email: string;
  password: string;
};

@observer
export class Login extends Component<{}, LoginState> {
  static contextType = Context;

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

    const { store } = this.context;

    await store.onSignIn({
      email: this.state.email,
      password: this.state.password
    });
  };

  render() {
    const {
      store: { auth }
    } = this.context;

    const isFetched =
      auth && auth.accessToken.length > 0 ? (
        <div>{auth.accessToken}</div>
      ) : (
        <div>Loading ...</div>
      );

    return (
      <Grid container alignItems="center" direction="column" justify="center">
        <Grid item>
          <h1 className="head">{isFetched}</h1>
        </Grid>
        <Grid item>
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
        </Grid>
      </Grid>
    );
  }
}
