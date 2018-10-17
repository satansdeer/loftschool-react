import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import rootSaga from './sagas'
import createSagaMiddleware from 'redux-saga'

export default initialState => {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(sagaMiddleware),
      window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
  )

  sagaMiddleware.run(rootSaga)
  return store
}
