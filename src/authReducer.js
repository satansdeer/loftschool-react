import { combineReducers } from 'redux';
import {
  handleActions,
  createActions,
} from 'redux-actions';

const {
  auth: {
    getJwtRequest,
    getJwtSuccess,
    getJwtFailure,
    getUserSecretRequest,
    getUserSecretSuccess,
    getUserSecretFailure,
    login,
    logout,
  },
} = createActions({
  AUTH: {
    GET_JWT_REQUEST: null,
    GET_JWT_SUCCESS: null,
    GET_JWT_FAILURE: null,
    GET_USER_SECRET_REQUEST: null,
    GET_USER_SECRET_SUCCESS: null,
    GET_USER_SECRET_FAILURE: null,
    LOGIN: null,
    LOGOUT: null,
  },
});

const isAuthorized = handleActions(
  {
    [login]: () => true,
    [logout]: () => false,
  },
  false,
);

const userProfile = handleActions(
  {
    [login]: (state, action) => action.payload,
    [logout]: () => null,
  },
  null,
);

export default combineReducers({
  isAuthorized,
  userProfile,
});

export {
  getJwtRequest,
  getJwtSuccess,
  getJwtFailure,
  getUserSecretRequest,
  getUserSecretSuccess,
  getUserSecretFailure,
  login,
  logout,
};

export const getIsAuthorized = state =>
  state.auth.isAuthorized;
export const getUserProfile = state =>
  state.auth.userProfile;
export const getUserSecret = state =>
  state.auth.userSecret;
export const getToken = state => state.auth.userProfile.token;
