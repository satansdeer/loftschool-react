import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import XKCD from './Xkcd'
import { Provider } from 'react-redux';
import createStore from './store';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <XKCD />
  </Provider>,
  document.getElementById('root'),
);
