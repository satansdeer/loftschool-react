import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
  getXkcdImageRequest,
  getXkcdImageSuccess,
  getXkcdImageFailure,
} from './actions';

const isLoading = handleActions(
  {
    [getXkcdImageRequest.toString()]: () => true,
    [getXkcdImageSuccess.toString()]: () => false,
    [getXkcdImageFailure.toString()]: () => false,
  },
  true,
);

const content = handleActions(
  {
    [getXkcdImageSuccess.toString()]: (_state, action) =>
      action.payload,
  },
  null,
);

const error = handleActions({
  [getXkcdImageFailure.toString()]: (_, action) => action.payload,
}, null)

export default combineReducers({ isLoading, content, error });
