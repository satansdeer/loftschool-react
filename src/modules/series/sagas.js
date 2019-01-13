import { takeEvery, call, put } from 'redux-saga/effects';
import {
  fetchSeriesRequest,
  fetchSeriesSuccess,
  fetchSeriesFailure,
} from './actions';

const getSeries = showId =>
  fetch(`http://api.tvmaze.com/shows/${showId}/episodes`).then(response =>
    response.json(),
  );

export function* handleSeries() {
  yield takeEvery(fetchSeriesRequest, function*() {
    try {
      const result = yield call(getSeries, 180);
      yield put(fetchSeriesSuccess(result));
    } catch (error) {
      yield put(fetchSeriesFailure(error));
    }
  });
}
