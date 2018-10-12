import {
  call,
  fork,
  put,
  cancel,
  take,
  cancelled,
  select,
} from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as api from '../api';
import { getRequest, getSuccess, getFailure } from '../modules/search';

export function* searchWatch() {
  yield debounceFor(getRequest, searchFlow, 500);
}

function* debounceFor(requiredAction, saga, ms) {
  function* delayedSaga(action) {
    yield call(delay, ms);
    yield call(saga, action);
  }

  let task;

  while (true) {
    const action = yield take(requiredAction);
    if (task) yield cancel(task);
    task = yield fork(delayedSaga, action);
  }
}

function* searchFlow(action) {
  const state = yield select();
  console.log(state);

  try {
    const response = yield call(api.search, action.payload);
    yield put(getSuccess(response));
  } catch (error) {
    yield put(getFailure(error));
  } finally {
    if (yield cancelled()) yield call(api.searchAbort);
  }
}
