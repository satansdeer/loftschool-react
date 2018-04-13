import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import createAppStore from './store';
import { Provider } from 'react-redux';

export default () => {
  const store = createAppStore();
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
};
