import {
  fetchSeriesRequest,
  fetchSeriesSuccess,
  fetchSeriesFailure,
} from './actions';
import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

const series = handleActions(
  {
    [fetchSeriesRequest]: () => [],
    [fetchSeriesSuccess]: (_state, action) => action.payload,
  },
  [],
);

const isLoading = handleActions(
  {
    [fetchSeriesRequest]: () => true,
    [fetchSeriesSuccess]: () => false,
    [fetchSeriesFailure]: () => false,
  },
  false,
);

const error = handleActions(
  {
    [fetchSeriesRequest]: () => null,
    [fetchSeriesFailure]: (_state, action) => action.payload,
  },
  null,
);

export default combineReducers({
  series,
  isLoading,
  error,
});

// state => state.series,
// series =>
//   series.map(({ id, name, image: { original } }) => ({
//     id,
//     name,
//     image: original,
//   })),

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
