import React from 'react';
import './App.css';
import ContextApiProvider from './context/ContextApi';

export default () => (
  <ContextApiProvider>
    <p>App</p>
  </ContextApiProvider>
);
