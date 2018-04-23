import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  logout,
  getJwtRequest,
  getIsAuthorized,
  getUserProfile,
  getUserSecret,
  getUserSecretRequest,
} from './authReducer';

class AuthorizeExample extends PureComponent {
  state = {
    email: '',
    password: '',
  };
  handleEnter = () => {
    const { email, password } = this.state;
    const { getJwtRequest } = this.props;
    this.setState({ email: '', password: '' });
    getJwtRequest({ email, password });
  };

  handleChangeInput = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { email, password } = this.state;
    const { isAuthorized } = this.props;

    if (isAuthorized) {
      return <AuthorizedPart />;
    }
    return (
      <div>
        <input
          name="email"
          placeholder="email"
          value={email}
          onChange={this.handleChangeInput}
        />
        <br />
        <input
          name="password"
          placeholder="password"
          value={password}
          onChange={this.handleChangeInput}
        />
        <br />
        <button onClick={this.handleEnter}>Войти</button>
      </div>
    );
  }
}

class AuthorizedPartClass extends PureComponent {
  componentDidMount() {
    const { userSecret, getUserSecretRequest } = this.props;
    if (!userSecret) {
      getUserSecretRequest();
    }
  }
  logout = () => {
    this.props.logout();
  };
  render() {
    return <button onClick={this.logout}>Выйти</button>;
  }
}

const AuthorizedPart = connect(
  state => ({
    isAuthorized: getIsAuthorized(state),
    userProfile: getUserProfile(state),
    userSecret: getUserSecret(state),
  }),
  { getUserSecretRequest, getJwtRequest, logout },
)(AuthorizedPartClass);

export default connect(
  state => ({
    isAuthorized: getIsAuthorized(state),
  }),
  { getJwtRequest, logout },
)(AuthorizeExample);
