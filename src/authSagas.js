import {
  getJwtRequest,
  getJwtSuccess,
  getJwtFailure,
  getIsAuthorized,
  login,
  logout,
  getToken,
} from './authReducer';
import {
  select,
  take,
  call,
  fork,
  put,
} from 'redux-saga/effects';
import {
  sendUserCredentials,
  setToken,
  deleteToken,
} from './api';

export default function*() {
  while (true) {
    const isAuthorized = yield select(getIsAuthorized);

    if (!isAuthorized) {
      const {
        payload: { email, password },
      } = yield take(getJwtRequest);

      yield fork(sagaAuthorize, email, password);

      const action = yield take([
        getJwtSuccess,
        getJwtFailure,
      ]);

      if (action.type === getJwtSuccess.toString()) {
        yield put(login(action.payload));
        const token = yield select(getToken);
        console.log(token, action.payload)
        yield call(setToken, token);
      } else {
        continue;
      }
    }

    yield take(logout);
    yield call(deleteToken);
  }
}

function* sagaAuthorize(email, password) {
  try {
    const response = yield call(
      sendUserCredentials,
      email,
      password,
    );
    yield put(getJwtSuccess(response.data));
  } catch (error) {
    yield put(getJwtFailure(error));
  }
}
