import {
  fetchSeriesFailure,
  fetchSeriesSuccess,
  fetchSeriesRequest,
} from './actions';

export const tvmazeFetchMiddleware = store => next => action => {
  if (action.type === fetchSeriesRequest.toString()) {
    fetch(`http://api.tvmaze.com/shows/${action.payload}/episodes`)
      .then(response => response.json())
      .then(series => {
        store.dispatch(fetchSeriesSuccess(series));
      })
      .catch(error => {
        store.dispatch(fetchSeriesFailure(error));
      });
  }
  return next(action);
};
