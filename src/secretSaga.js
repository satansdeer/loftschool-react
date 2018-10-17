import {
  getUserSecretRequest,
  getUserSecretSuccess,
  getUserSecretFailure
} from './authReducer'
import { call, put, takeEvery } from 'redux-saga/effects'
import { getSecret } from './api'

export default function*() {
  yield takeEvery(getUserSecretRequest, getSecretFlow)
}

function* getSecretFlow() {
  try {
    const response = yield call(getSecret)
    yield put(getUserSecretSuccess(response))
  } catch (error) {
    yield put(getUserSecretFailure(error))
  }
}
