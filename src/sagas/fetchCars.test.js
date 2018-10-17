import { getShowRequest, getShowSuccess, getShowFailure } from '../ducks/shows';
import { getCars, fetchCarsFlow, fetchCarsWatcher } from './fetchCars';
import { call, put, takeEvery } from 'redux-saga/effects';

describe('#fetchCarsWatcher', () => {
  it('1', () => {
    const iterator = fetchCarsWatcher();
    expect(iterator.next().value).toEqual(
      takeEvery(getShowRequest, fetchCarsFlow),
    );
  });
});

describe('fetchCarsFlow success', () => {
  const iterator = fetchCarsFlow();
  it('2', () => {
    expect(iterator.next().value).toEqual(call(getCars));
  });

  it('3', () => {
    expect(iterator.next({ message: 'success' }).value).toEqual(
      put(getShowSuccess({ message: 'success' })),
    );
  });
});

describe('fetchCarsFlow failure', () => {
  const iterator = fetchCarsFlow();
  iterator.next();

  it('3', () => {
    expect(iterator.throw({ message: 'failure' }).value).toEqual(
      put(getShowFailure({ message: 'failure' })),
    );
  });
});
