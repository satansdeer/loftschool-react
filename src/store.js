import { createStore, compose, applyMiddleware } from 'redux';
import { getSeriesRequest, getSeriesSuccess, getSeriesFailure } from './actions';
import rootReducer from './reducers';

const tvmazeFetchMiddleware = store => next => action => {
  if (action.type === getSeriesRequest.toString()) {
    fetch('http://api.tvmaze.com/shows/180/episodes', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(series => {
        store.dispatch(getSeriesSuccess(series, series.length));
      })
      .catch(error => {
        store.dispatch(getSeriesFailure(error));
      });
  }

  return next(action);
};

const createAppStore = () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(tvmazeFetchMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  );

  return store;
};

export default createAppStore;

// state0 ->  reducers -> state1
//              ↑
//            middleware1
//              ↑
//            middleware0
//              ↑
// action ->  store
