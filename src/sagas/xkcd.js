import {
  getXkcdImageRequest,
  getXkcdImageSuccess,
  getXkcdImageFailure,
} from '../modules/xkcd';
import { take, call, put } from 'redux-saga/effects';
import { getXkcdImage } from '../api';

export function* xkcdImageRequestWatcher() {
  while (true) {
    yield take(getXkcdImageRequest);

    try {
      const response = yield call(getXkcdImage);
      yield put(getXkcdImageSuccess(response));
    } catch (error) {
      yield put(getXkcdImageFailure(error));
    }
  }
}

// const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
