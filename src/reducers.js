import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { getSeriesRequest, getSeriesSuccess, getSeriesFailure } from './actions';

const series = handleActions(
  {
    [getSeriesSuccess]: (state, action) => state.concat(action.payload),
  },
  [],
);

const isLoading = handleActions(
  {
    [getSeriesRequest]: () => true,
    [getSeriesFailure]: () => false,
    [getSeriesSuccess]: () => false,
  },
  false,
);

const error = handleActions(
  {
    [getSeriesRequest]: () => null,
    [getSeriesFailure]: (state, action) => action.payload,
  },
  null,
);

export default combineReducers({
  series,
  isLoading,
  error,
});

// const initialState = {
//   series: [],
//   isLoading: false,
//   error: null,
// };

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case getSeriesRequest.toString():
//       return { ...state, isLoading: true };

//     case getSeriesSuccess.toString():
//       return {
//         ...state,
//         series: state.series.concat(action.payload),
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
