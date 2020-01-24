import React, { Component } from 'react';
import { AuthProvider, authHOC } from './AuthContext';

let SomeComponent = ({ login, logout, isAuthorized }) => (
  <div>
    <button onClick={login}>login</button>
    <button onClick={logout}>logout</button>
    {isAuthorized ? 'You are entered' : 'You are out'}
  </div>
);

SomeComponent = authHOC(SomeComponent);

class AuthContextExample extends Component {
  render() {
    return (
      <AuthProvider>
        <SomeComponent />
      </AuthProvider>
    );
  }
}

export default AuthContextExample;
