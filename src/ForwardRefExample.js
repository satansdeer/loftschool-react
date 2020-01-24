import React, { Component, PureComponent } from 'react';

class Stateless extends Component {
  render() {
    const { email } = this.props;
    console.log('Component render');
    return <p>I'm simple stateless component. {email}</p>;
  }
}

function pureHOC(WrappedComponent) {
  class WithPure extends PureComponent {
    static displayName = 'pureHOCWrapper';

    render() {
      const { forwardedRef, ...rest } = this.props;
      return (
        <WrappedComponent {...rest} ref={forwardedRef} />
      );
    }
  }

  return React.forwardRef((props, ref) => (
    <WithPure {...props} forwardedRef={ref} />
  ));
}

Stateless = pureHOC(Stateless);

export class HOCExample extends Component {
  state = {
    counter: 0,
  };

  statelessComponent = React.createRef();

  componentDidMount() {
    setInterval(() => {
      this.setState(state => ({
        counter: state.counter + 1,
      }));
    }, 1000);

    console.log(this.statelessComponent);
  }

  render() {
    return (
      <Stateless
        ref={this.statelessComponent}
        email="student@loft.school"
      />
    );
  }
}

export default HOCExample;
