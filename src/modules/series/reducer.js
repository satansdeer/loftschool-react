import {
  getSeriesRequest,
  getSeriesSuccess,
  getSeriesFailure,
} from './actions';
import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

const series = handleActions(
  {
    [getSeriesRequest]: () => [],
    [getSeriesSuccess]: (_state, action) => action.payload,
  },
  [],
);

const isLoading = handleActions(
  {
    [getSeriesRequest]: () => true,
    [getSeriesSuccess]: () => false,
    [getSeriesFailure]: () => false,
  },
  false,
);

const error = handleActions(
  {
    [getSeriesRequest]: () => null,
    [getSeriesFailure]: (_state, action) => action.payload,
  },
  null,
);

export default combineReducers({
  series,
  isLoading,
  error,
});

export const getSeries = state =>
  state.series.map(({ id, name, image: { original } }) => ({
    id,
    name,
    image: original,
  }));
export const getIsLoading = state => state.isLoading;
export const getError = state => state.error;

// const initialState = {
//   series: [],
//   isLoading: false,
//   error: null,
// };

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case getSeriesRequest.toString():
//       return {
//         ...state,
//         series: [],
//         isLoading: true,
//       };

//     case getSeriesSuccess.toString():
//       return {
//         ...state,
//         series: action.payload,
//         isLoading: false,
//       };

//     case getSeriesFailure.toString():
//       return {
//         ...state,
//         error: action.payload,
//         isLoading: false,
//       };

//     default:
//       return state;
//   }
// };
