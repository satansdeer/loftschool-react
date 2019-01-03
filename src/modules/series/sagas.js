import { takeEvery, call } from 'redux-saga/effects';
import { fetchSeriesRequest } from './actions';

const getSeries = showId =>
  fetch(`http://api.tvmaze.com/shows/${showId}/episodes`).then(response =>
    response.json(),
  );

export function* handleSeries() {
  yield takeEvery(fetchSeriesRequest, function*() {
    const result = yield call(getSeries, 100);
    console.log(result);
  });
}
