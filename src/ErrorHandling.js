import React, { Component } from 'react';

export class ErrorHandling extends Component {
  state = {
    hasError: false,
    error: null,
  };
  componentDidCatch(error, errorInfo) {
    console.log(error);
    console.log(errorInfo);
    this.setState({ hasError: true, error });
  }
  render() {
    const { hasError } = this.state;
    if (hasError) {
      return (
        <p style={{ backgroundColor: 'red', padding: 20 }}>
          Ошибка
        </p>
      );
    }
    return <Child />;
  }
}
export class Child extends Component {
  componentDidMount() {
    throw new Error('Случайная ошибка');
  }
  render() {
    return <div>Child</div>;
  }
}

export default ErrorHandling;
