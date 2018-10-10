import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  fetchSeriesRequest,
  fetchSeriesSuccess,
  fetchSeriesFailure,
} from './actions';

const elements = handleActions(
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
  elements,
  isLoading,
  error,
});


// export const fetchSeriesImages = state =>
//   state.series.elements.map(({ id, image: { original }, name }) => ({
//     id,
//     image: original,
//     name,
//   }));

// const initialState = {
//   series: [],
//   isLoading: false,
//   error: null,
// };

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case fetchSeriesRequest.toString():
//       return {
//         ...state,
//         series: [],
//         isLoading: true,
//       };

//     case fetchSeriesSuccess.toString():
//       return {
//         ...state,
//         series: action.payload,
//         isLoading: false,
//       };

//     case fetchSeriesFailure.toString():
//       return {
//         ...state,
//         error: action.payload,
//         isLoading: false,
//       };

//     default:
//       return state;
//   }
// };
