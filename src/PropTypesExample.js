import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

const StatelessGreeting = ({ name, age }) => (
  <Fragment>
    <p>Hello, {name}!</p>
    <p>Age: {age}.</p>
  </Fragment>
);

StatelessGreeting.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  object: PropTypes.shape({
    firstName: PropTypes.string,
    brothers: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string
    })),
  }),
};

export class PropTypesExample extends Component {
  render() {
    return <StatelessGreeting name="Артём" age="30" />;
  }
}

export default PropTypesExample;
