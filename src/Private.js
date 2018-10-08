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
  loginPath = '/login';
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
        value={{
          isAuthorized,
          authorize: this.authorize,
          loginPath: this.loginPath,
        }}
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

let LoginPage = ({ isAuthorized, authorize }) =>
  isAuthorized ? (
    <Redirect to="/" />
  ) : (
    <button onClick={authorize}>Authorize</button>
  );

LoginPage = withAuth(LoginPage);

function withAuth(WrappedComponent) {
  return class AuthHOC extends Component {
    render() {
      const { ...rest } = this.props;
      return (
        <AuthConsumer>
          {contextProps => (
            <WrappedComponent {...contextProps} {...rest} />
          )}
        </AuthConsumer>
      );
    }
  };
}

let PrivateRoute = ({
  component: RouteComponent,
  isAuthorized,
  loginPath,
  ...rest
}) => (
  <Route
    {...rest}
    render={routeProps =>
      isAuthorized ? (
        <RouteComponent {...routeProps} />
      ) : (
        <Redirect to={loginPath} />
      )
    }
  />
);

PrivateRoute = withAuth(PrivateRoute);

export default PrivateExample;
