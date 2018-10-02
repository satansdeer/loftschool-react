import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

const Child = ({
  person: { firstname, lastname, age },
  isTeacher,
}) => (
  <Fragment>
    <p>
      Hello, {firstname} {lastname}!
    </p>
    <p>Age: {age}.</p>
    {isTeacher && <p>Учитель!</p>}
  </Fragment>
);

Child.propTypes = {
  person: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    age: PropTypes.number,
  }).isRequired,
};

Child.defaultProps = {
  isTeacher: true,
};

Child.displayName = 'ChildWithPropTypes'

export class PropTypesExample extends Component {
  static displayName = 'PropType';
  render() {
    return (
      <React.Fragment>
        <Child
          person={{
            age: 12,
            firstname: '123',
            lastname: 'as',
          }}
          isTeacher={false}
        />
        <Child
          person={{
            firstname: 'Артём',
            lastname: 'Самофалов',
            age: 31,
          }}
        />
      </React.Fragment>
    );
  }
}

export default PropTypesExample;
