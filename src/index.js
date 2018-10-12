import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import XKCD from './Xkcd'
import { Provider } from 'react-redux';
import createStore from './store';
import { getXkcdImageRequest } from './modules/xkcd';

const store = createStore();

store.dispatch(getXkcdImageRequest())

ReactDOM.render(
  <Provider store={store}>
    {/* <XKCD /> */}
    <App />
  </Provider>,
  document.getElementById('root'),
);
