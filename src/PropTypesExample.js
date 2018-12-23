import React, { Component } from 'react';

class Child extends Component {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        <p>Hello, {name}!</p>
        <p>Age: {age}.</p>
      </div>
    );
  }
}

export class PropTypesExample extends Component {
  render() {
    return (
      <div>
        <Child name="Максим" age="28" />
      </div>
    );
  }
}

export default PropTypesExample;
