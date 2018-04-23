import {
  takeEvery,
  select,
  put,
  fork,
  take,
} from 'redux-saga/effects';

import {
  moveLeft,
  moveRight,
  moveDown,
  moveUp,
  changePosition,
  gameOver,
  tutorial1End,
} from './actions';

import { getPosition, getExitPosition } from './reducers';
import authSaga from './authSagas';
import secretSaga from './secretSaga';

function* moveUserWatcher(action) {
  const position = yield select(getPosition);

  switch (action.type) {
    case moveLeft.toString():
      if (position.x !== 0)
        yield put(
          changePosition({
            ...position,
            x: position.x - 1,
          }),
        );
      break;

    case moveRight.toString():
      if (position.x !== 9)
        yield put(
          changePosition({
            ...position,
            x: position.x + 1,
          }),
        );
      break;

    case moveUp.toString():
      if (position.y !== 0)
        yield put(
          changePosition({
            ...position,
            y: position.y - 1,
          }),
        );
      break;

    case moveDown.toString():
      if (position.y !== 9)
        yield put(
          changePosition({
            ...position,
            y: position.y + 1,
          }),
        );
      break;

    default:
      break;
  }
}

function* changePositionWatcher({ payload: { x, y } }) {
  const exitPosition = yield select(getExitPosition);

  if (exitPosition.x === x && exitPosition.y === y)
    yield put(gameOver());
}

export function* tutorial1() {
  const userMoves = { right: 0, down: 0 };

  while (userMoves.right < 3 || userMoves.down < 1) {
    const action = yield take([moveRight, moveDown]);

    if (action.type === moveRight.toString())
      userMoves.right += 1;
    else if (action.type === moveDown.toString())
      userMoves.down += 1;
  }

  yield put(tutorial1End());
}

export default function*() {
  yield takeEvery(
    [moveLeft, moveRight, moveDown, moveUp],
    moveUserWatcher,
  );

  yield takeEvery(changePosition, changePositionWatcher);
  yield fork(tutorial1);
  yield fork(authSaga);
  yield fork(secretSaga);
}
