import { createStore, compose, applyMiddleware } from 'redux';
import { tvMazeMiddleware } from './modules/series/middlewares';
import rootReducer from './modules/series/reducer';

const createAppStore = () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(tvMazeMiddleware),
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
