import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import RecomposeExample from './RecomposeExample';
import ForwardRefExample from './ForwardRefExample';
import LoaderHOCExample from './LoaderHOCExample';
import { PureHOCExample } from './PureHOCExample';
import AuthContextExample from './AuthContextExample';
import RenderPropsExample from './RenderProps';
// import RenderProps from './RenderProps';
// import HOCs from './HOCs';
// import { AuthProvider, authHOC } from './AuthContext';

// let SomeComponent = ({ login, logout, isAuthorized }) => (
//   <div>
//     <button onClick={login}>login</button>
//     <button onClick={logout}>logout</button>
//     {isAuthorized ? 'You are entered' : 'You are out'}
//   </div>
// );

// SomeComponent = authHOC(SomeComponent);

ReactDOM.render(
  // <AuthProvider>
  //   <HOCs />
  //   {/* <SomeComponent /> */}
  // </AuthProvider>,
  // <RecomposeExample />,
  // <ForwardRefExample />,
  <RenderPropsExample />,
  document.getElementById('root'),
);
