import React, { Component } from 'react';
import {
  Route,
  Link,
  Redirect,
  Switch,
} from 'react-router-dom';

const {
  Provider: AuthProvider,
  Consumer: AuthConsumer,
} = React.createContext({ isAuthorized: false });

export class PrivateExample extends Component {
  state = {
    isAuthorized: false,
  };

  authorize = () => {
    this.setState({ isAuthorized: true });
  };

  render() {
    const { isAuthorized } = this.state;
    return (
      <AuthProvider
        value={{ isAuthorized, authorize: this.authorize }}
      >
        <Link to="/public">Public</Link>{' '}
        <Link to="/private">Private</Link>{' '}
        <Link to="/login">Login</Link>
        <hr />
        <Switch>
          <Route
            path="/public"
            render={() => <p>Public</p>}
          />
          <Route path="/login" component={LoginPage} />
          <PrivateRoute
            path="/private"
            component={() => <p>Private</p>}
          />
          <Redirect to="/public" />
        </Switch>
      </AuthProvider>
    );
  }
}

const LoginPage = () => (
  <AuthConsumer>
    {({ authorize }) => (
      <button onClick={authorize}>Authorize</button>
    )}
  </AuthConsumer>
);

const PrivateRoute = ({
  component: Component,
  ...rest
}) => (
  <AuthConsumer>
    {({ isAuthorized }) => (
      <Route
        {...rest}
        render={props =>
          isAuthorized ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    )}
  </AuthConsumer>
);

export default PrivateExample;
