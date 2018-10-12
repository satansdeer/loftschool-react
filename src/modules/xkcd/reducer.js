import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
  getXkcdImageRequest,
  getXkcdImageSuccess,
  getXkcdImageFailure,
} from './actions';

const isLoading = handleActions(
  {
    [getXkcdImageRequest]: () => true,
    [getXkcdImageSuccess]: () => false,
    [getXkcdImageFailure]: () => false,
  },
  false,
);

const content = handleActions(
  {
    [getXkcdImageSuccess]: (_state, action) =>
      action.payload,
  },
  null,
);

const error = handleActions({
  [getXkcdImageFailure]: (_, action) => action.payload,
}, null)

export default combineReducers({ isLoading, content, error });
