import { createActions } from 'redux-actions';

const {
  series: { request: getSeriesRequest, success: getSeriesSuccess, failure: getSeriesFailure },
} = createActions({
  SERIES: {
    REQUEST: null,
    SUCCESS: [series => series, (series, pageCount) => ({ pageCount })],
    FAILURE: null,
  },
});

getSeriesSuccess([1, 2, 3, 4], 20);
// {type: "SERIES/SUCCESS", payload: [1, 2, 3, 4], meta: { pageCount: 20 }}

export { getSeriesRequest, getSeriesSuccess, getSeriesFailure };
