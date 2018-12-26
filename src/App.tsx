import React, { Component } from 'react';
import { Login } from './pages/Login';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = {};

class App extends Component {
  render() {
    return (
      <Grid container justify="center">
        <Grid item xs={8}>
          <Login />
        </Grid>
      </Grid>
    );
  }
}
export default withStyles(styles)(App);
