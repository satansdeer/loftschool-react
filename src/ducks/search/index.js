import { combineReducers } from 'redux';
import { handleActions, createActions } from 'redux-actions';

const {
  search: { getRequest, getSuccess, getFailure },
} = createActions({
  SEARCH: {
    GET_REQUEST: null,
    GET_SUCCESS: null,
    GET_FAILURE: null,
  },
});

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

export { getRequest, getSuccess, getFailure };

export const getIsSearching = state => state.search.isSearching;
export const getResult = state => state.search.result;
