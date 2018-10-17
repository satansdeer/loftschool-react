import { getShowRequest, getShowSuccess, getShowFailure } from '../ducks/shows';
import { call, put, takeEvery } from 'redux-saga/effects';

export function* fetchCarsWatcher() {
  yield takeEvery(getShowRequest, fetchCarsFlow);
}

export function getCars() {}
export function* fetchCarsFlow() {
  try {
    const data = yield call(getCars);
    yield put(getShowSuccess(data));
  } catch (error) {
    yield put(getShowFailure(error));
  }
}
