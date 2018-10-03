import React from 'react';
import {
  withState,
  withHandlers,
  mapProps,
  pure,
  compose,
} from 'recompose';

const Buttons = ({
  buttons,
  toggleButton,
  selectedIndex,
}) => (
  <div>
    {buttons.map(index => (
      <button
        onClick={toggleButton}
        data-key={index}
        key={index}
        style={Object.assign(
          {},
          selectedIndex.includes(index) && {
            backgroundColor: 'red',
          },
        )}
      >
        {index}
      </button>
    ))}
  </div>
);

const enhance = compose(
  withState('selectedIndex', 'changeSelectedIndex', []),
  withState('buttons', 'changeButtons', ['😀', '😅', '😔']),
  withHandlers({
    toggleButton: props => event => {
      const index = event.target.dataset.key;
      props.changeSelectedIndex(() => [index]);
    },
  }),
  // withHandlers({
  //   toggleButton: props => event => {
  //     const index = event.target.dataset.key;
  //     props.changeSelectedIndex(state => {
  //       if (state.includes(index)) {
  //         return state.filter(i => i !== index);
  //       } else {
  //         return state.concat(index);
  //       }
  //     });
  //   },
  // }),
  mapProps(
    ({ changeSelectedIndex, changeButtons, ...rest }) =>
      rest,
  ),
  pure,
);

export default enhance(Buttons);
