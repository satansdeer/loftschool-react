import {
  fetchSeriesRequest,
  fetchSeriesSuccess,
  fetchSeriesFailure,
} from './actions';

export const tvMazeMiddleware = store => next => action => {
  if (action.type === fetchSeriesRequest.toString()) {
    fetch('http://api.tvmaze.com/shows/180/episodes')
      .then(response => response.json())
      .then(data => {
        store.dispatch(fetchSeriesSuccess(data));
      })
      .catch(error => {
        store.dispatch(fetchSeriesFailure(error));
      });
  }
  next(action);
};
