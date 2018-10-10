import { createStore, compose, applyMiddleware } from 'redux';
import { tvmazeFetchMiddleware } from './modules/series';
import rootReducer from './modules';

const createAppStore = () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(tvmazeFetchMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : noop => noop,
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
