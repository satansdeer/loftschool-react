import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import AppWithRouting from 'AppWithRouting';
import { BrowserRouter } from 'react-router-dom';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <BrowserRouter>
    <AppWithRouting />
  </BrowserRouter>,
  document.getElementById('root'),
);
