import { createAction } from 'redux-actions';

export const fetchSeriesRequest = createAction('FETCH_SERIES_REQUEST');
export const fetchSeriesSuccess = createAction('FETCH_SERIES_SUCCESS');
export const fetchSeriesFailure = createAction('FETCH_SERIES_FAILURE');
