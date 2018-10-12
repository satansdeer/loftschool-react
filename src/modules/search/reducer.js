import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { getRequest, getSuccess, getFailure } from './actions';

const isSearching = handleActions(
  {
    [getRequest]: () => true,
    [getSuccess]: () => false,
    [getFailure]: () => false,
  },
  false,
);

const error = handleActions(
  {
    [getRequest]: () => null,
    [getSuccess]: () => null,
    [getFailure]: (state, action) => action.payload,
  },
  null,
);

const result = handleActions(
  {
    [getRequest]: (state, action) => null,
    [getSuccess]: (state, action) => action.payload,
  },
  null,
);

export default combineReducers({
  isSearching,
  error,
  result,
});

export const getIsSearching = state => state.search.isSearching;
export const getResult = state => state.search.result;
