import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Child = ({
  person: { firstName, lastName, age },
}) => {
  return (
    <div>
      <p>
        Hello, {firstName} {lastName}!
      </p>
      <p>Age: {age}.</p>
    </div>
  );
};

Child.propTypes = {
  person: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }).isRequired,
  isTeacher: PropTypes.bool.isRequired,
};

Child.defaultProps = {
  isTeacher: true,
};

export class PropTypesExample extends Component {
  render() {
    return (
      <div>
        <Child
          person={{
            firstName: 'Максим',
            lastName: 'Иванов',
            age: 28,
          }}
        />
      </div>
    );
  }
}

export default PropTypesExample;
