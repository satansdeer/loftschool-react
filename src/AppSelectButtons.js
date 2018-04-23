import React from 'react';
import { compose, pure, withState, withHandlers } from 'recompose';

const enhanced = compose(
  withState('counter', 'updateCounter', 0),
  withHandlers({
    increment: props => () => props.updateCounter(s => s + 1),
  }),
  pure,
);

const App = ({ counter, increment }) => (
  <div>
    {counter}
    <button onClick={increment}>+</button>
  </div>
);

export default enhanced(App);
