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

    return hasError ? (
      <p style={{ backgroundColor: 'red', padding: 20 }}>
        Извините, программисты уже чинят, попробуйте через
        10 минут
      </p>
    ) : (
      <Child />
    );
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
