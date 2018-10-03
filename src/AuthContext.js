import React, { Component } from 'react';

const {
  Provider,
  Consumer: AuthConsumer,
} = React.createContext('');

class AuthProvider extends Component {
  state = {
    isAuthorized: false,
  };

  login = () => {
    this.setState({ isAuthorized: true });
  };
  logout = () => {
    this.setState({ isAuthorized: false });
  };

  render() {
    const { children } = this.props;
    const { isAuthorized } = this.state;
    return (
      <Provider
        value={{
          isAuthorized,
          login: this.login,
          logout: this.logout,
        }}
      >
        {children}
      </Provider>
    );
  }
}

function authHOC(WrappedComponent) {
  return class extends Component {
    static displayName = 'authHOC';

    render() {
      return (
        <AuthConsumer>
          {contextProps => (
            <WrappedComponent
              {...contextProps}
              {...this.props}
            />
          )}
        </AuthConsumer>
      );
    }
  };
}

export { AuthProvider, AuthConsumer, authHOC };
