import {
  getSeriesRequest,
  getSeriesSuccess,
  getSeriesFailure,
} from './actions';

export const tvMazeMiddleware = store => next => action => {
  if (action.type === getSeriesRequest.toString()) {
    fetch('http://api.tvmaze.com/shows/180/episodes', { method: 'GET' })
      .then(response => response.json())
      .then(data => {
        store.dispatch(getSeriesSuccess(data));
      })
      .catch(error => {
        store.dispatch(getSeriesFailure(error));
      });
  }
  next(action);
};
