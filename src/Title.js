import React, { Component } from 'react';

class Title extends Component {
  render() {
    const {
      children,
      fontSize,
    } = this.props;
    return (
      <div>
        <p style={{ fontSize }}>
          {children}
        </p>
        <SomeComponent />
      </div>
    );
  }
}

class SomeComponent extends Component {
  render() {
    return <sometag />;
  }
}

export default Title;
