import { fork } from 'redux-saga/effects';
import { xkcdImageRequestWatcher } from './xkcd';
import { searchWatch } from './hardSagas';

export default function*() {
  yield fork(xkcdImageRequestWatcher);
  yield fork(searchWatch);
}
