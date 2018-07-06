import { getXkcdImageRequest, getXkcdImageSuccess } from '../ducks/xkcd';
import { takeEvery, call, put } from 'redux-saga/effects';
import { getXkcdImage, sendReport } from '../api';
import { addNetworkError } from '../ducks/network';

function* xkcdImageRequestFlow() {
  try {
    const response = yield call(networkWrapper, getXkcdImage);
    yield put(getXkcdImageSuccess(response));
  } catch (error) {}
}

function* networkWrapper(newtorkFn) {
  try {
    const result = yield call(newtorkFn);
    return result;
  } catch (error) {
    yield call(sendReport, error);
    yield put(addNetworkError);
  }
}

export function* xkcdImageRequestWatcher() {
  yield takeEvery(getXkcdImageRequest.toString(), xkcdImageRequestFlow);
}
