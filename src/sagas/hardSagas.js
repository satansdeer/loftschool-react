import { call, fork, put, cancel, take, cancelled } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as api from '../api';
import { getRequest, getSuccess, getFailure } from '../ducks/search';

export function* searchWatch() {
  yield debounceFor(getRequest, searchFlow, 500);
}

function* debounceFor(pattern, saga, ms, ...args) {
  function* delayedSaga(action) {
    yield call(delay, ms);
    yield call(saga, action, ...args);
  }

  let task;

  while (true) {
    const action = yield take(pattern);
    if (task) yield cancel(task);
    task = yield fork(delayedSaga, action);
  }
}

function* searchFlow(action) {
  try {
    const response = yield call(api.search, action.payload);
    yield put(getSuccess(response));
  } catch (error) {
    yield put(getFailure(error));
  } finally {
    if (yield cancelled()) yield call(api.searchAbort);
  }
}

// takeEvery
// put
// call
// try/catch

// rootSaga, watch, flow
