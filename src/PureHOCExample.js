import React, { Component, PureComponent } from 'react';

class Stateless extends Component {
  render() {
    const { email } = this.props;
    console.log('Component render');
    return <p>I'm simple stateless component. {email}</p>;
  }
}

function pureHOC(WrappedComponent) {
  return class extends PureComponent {
    static displayName = 'pureHOCWrapper';

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

Stateless = pureHOC(Stateless);

export class PureHOCExample extends Component {
  state = {
    counter: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState(state => ({
        counter: state.counter + 1,
      }));
    }, 1000);
  }

  render() {
    return <Stateless email="example@test.ru" />;
  }
}
