import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import AuthorizeExample from './AuthorizeExample';
import AppSelectButtons from './AppSelectButtons';
import { Provider } from 'react-redux';
import getStore from './store';

const store = getStore();

ReactDOM.render(
  <Provider store={store}>
    <Fragment>
      <AppSelectButtons />
      {/* <App /> */}
      {/* <AuthorizeExample /> */}
    </Fragment>
  </Provider>,
  document.getElementById('root'),
);
