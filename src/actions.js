import {createActions} from 'redux-actions';

const {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure,
  moveLeft,
  moveRight,
  moveUp,
  moveDown,
  changePosition,
  gameOver,
  tutorial1End,
} = createActions(
  'FETCH_DATA_REQUEST',
  'FETCH_DATA_SUCCESS',
  'FETCH_DATA_FAILURE',
  'MOVE_LEFT',
  'MOVE_RIGHT',
  'MOVE_UP',
  'MOVE_DOWN',
  'CHANGE_POSITION',
  'GAME_OVER',
  'TUTORIAL_1_END',
);

export {
  moveLeft,
  moveRight,
  moveUp,
  moveDown,
  changePosition,
  gameOver,
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure,
  tutorial1End,
};
