import React from 'react';
import { connect } from 'react-redux';
import {
  compose,
  pure,
  branch,
  renderComponent,
  withHandlers,
  lifecycle,
} from 'recompose';


import {
  getPosition,
  getExitPosition,
  getIsGameOver,
  getIsTutorial1End,
} from 'reducers';
import {
  moveLeft,
  moveRight,
  moveUp,
  moveDown,
  tutorial1End,
} from 'actions';

import './App.css';

const IN_PIXELS = 50;

const App = ({
  position,
  exitPosition,
  isTutorial1End,
}) => (
  <div>
    {!isTutorial1End ? (
      <pre>
        Press the right button 3 times and 1 time the down
        button
      </pre>
    ) : (
      <pre>Cool!</pre>
    )}
    <div className="app">
      <div className="field">
        <div
          className="player"
          style={{
            left: position.x * IN_PIXELS,
            top: position.y * IN_PIXELS,
          }}
        />
        <div
          className="exit"
          style={{
            left: exitPosition.x * IN_PIXELS,
            top: exitPosition.y * IN_PIXELS,
          }}
        />
      </div>
    </div>
  </div>
);

const enhance = compose(
  connect(
    state => ({
      position: getPosition(state),
      exitPosition: getExitPosition(state),
      isGameOver: getIsGameOver(state),
      isTutorial1End: getIsTutorial1End(state),
    }),
    {
      moveLeft,
      moveRight,
      moveUp,
      moveDown,
      tutorial1End,
    },
  ),
  branch(
    ({ isGameOver }) => isGameOver,
    renderComponent(() => <p>You win!</p>),
  ),
  withHandlers({
    handleKeyPress: props => event => {
      switch (event.key) {
        case 'ArrowUp':
          props.moveUp();
          break;
        case 'ArrowDown':
          props.moveDown();
          break;
        case 'ArrowLeft':
          props.moveLeft();
          break;
        case 'ArrowRight':
          props.moveRight();
          break;
        default:
          return;
      }
    },
  }),
  lifecycle({
    componentDidMount() {
      document.addEventListener(
        'keydown',
        this.props.handleKeyPress,
      );
    },
    componentWillUnmount() {
      document.removeEventListener(
        'keyup',
        this.props.handleKeyPress,
      );
    },
  }),
  pure,
);

export default enhance(App);
