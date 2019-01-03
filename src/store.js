import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import { handleSeries } from './modules/series/sagas';
import rootReducer from './modules/series/reducer';

const sagaMiddleware = createSagaMiddleWare();

const createAppStore = () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : noop => noop,
    ),
  );

  sagaMiddleware.run(handleSeries);

  return store;
};

export default createAppStore;
