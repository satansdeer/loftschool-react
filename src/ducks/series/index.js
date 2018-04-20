import { handleActions, createActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

const {
  series: {
    getDataRequest: getSeriesRequest,
    getDataSuccess: getSeriesSuccess,
    getDataFailure: getSeriesFailure,
  },
} = createActions({
  SERIES: {
    GET_DATA_REQUEST: null,
    GET_DATA_SUCCESS: [series => series, (series, pageCount) => ({ pageCount })],
    GET_DATA_FAILURE: null,
  },
});

const elements = handleActions(
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
  elements,
  isLoading,
  error,
});

const getIsLoading = state => state.series.isLoading;
const getError = state => state.series.error;
const getSeries = state => state.series.elements;

const getSeriesPreviewImages = createSelector(getSeries, elements =>
  elements.map(el => ({ id: el.id, name: el.name, image: el.image.original })),
);

export {
  getSeriesRequest,
  getSeriesSuccess,
  getSeriesFailure,
  getIsLoading,
  getError,
  getSeries,
  getSeriesPreviewImages,
};
