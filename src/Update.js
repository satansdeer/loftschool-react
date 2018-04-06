import React, {
  Fragment,
  Component,
  PureComponent,
} from 'react';

class Simple extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  render() {
    console.log('render simple');
    return <div>Simple</div>;
  }
}

class Pure extends PureComponent {
  render() {
    console.log('render pure');
    console.log(this.props);
    return <div>Pure</div>;
  }
}

const StatelessComponent = (props) => {
  console.log('render StatelessComponent')
  console.log(props)
  return <div />;
};

StatelessComponent.defaultProps = {
  someProp: 1
}

export default class extends Component {

  state = {
    counter: { value: 0 },
  };
  componentDidMount() {
    setInterval(() => {
      const { counter } = this.state;
      counter.value += 1;
      this.setState({ counter });
    }, 1000);
  }
  render() {
    const { counter } = this.state;
    console.log(counter);
    return (
      <Fragment>
        {/* <Simple /> */}
        <StatelessComponent />
        <Pure
          key={'asdadsa'}
          ref={c => (this.pure = c)}
          counter={counter}
        />
      </Fragment>
    );
  }
}
