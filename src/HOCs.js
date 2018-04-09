import React, { PureComponent, Component } from 'react';

let Stateless = ({email}) => {
  console.log('Stateless render');
  return <p>I'm simple stateless component</p>;
};

function pure(WrappedComponent) {
  return class extends PureComponent {
    static displayName = 'pure HOC';
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

Stateless = pure(Stateless);
export class HOCs extends Component {
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
    return <Stateless />;
  }
}

export default HOCs;
