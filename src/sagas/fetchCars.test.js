import {
  getShowRequest,
  getShowSuccess,
  getShowFailure,
} from '../ducks/shows';
import {
  getCars,
  fetchCarsFlow,
  fetchCarsWatcher,
} from './fetchCars';
import {
  call,
  put,
  takeEvery,
} from 'redux-saga/effects';

describe('#fetchCarsWatcher', () => {
  it('1', () => {
    const iterator = fetchCarsWatcher();
    expect(iterator.next().value).toEqual(
      takeEvery(
        getShowRequest.toString(),
        fetchCarsFlow,
      ),
    );
  });
});

describe('fetchCarsFlow', () => {
  const iterator = fetchCarsFlow();
  it('2', () => {
    expect(iterator.next().value).toEqual(
      call(getCars),
    );
  });
  it('3', () => {
    expect(
      iterator.next({ message: 'error' })
        .value,
    ).toEqual(
      put(
        getShowSuccess({ message: 'error' }),
      ),
    );
  });
});
