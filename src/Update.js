import React, {
  Fragment,
  Component,
  PureComponent,
} from 'react';

class Simple extends Component {
  render() {
    // console.log('render Component');
    return <div>Component {this.props.var}</div>;
  }
}

class Pure extends PureComponent {
  render() {
    // console.log('render pure');
    // console.log(this.props);
    return <div>Pure {this.props.var}</div>;
  }
}

const StatelessComponent = props => {
  // console.log('render StatelessComponent');
  // console.log(props);
  return <div>Stateless</div>;
};

StatelessComponent.defaultProps = {
  someProp: 1,
};

export default class extends Component {
  state = {
    counter: 0,
  };

  componentDidMount() {
    // const { counter } = this.state;
    this.setState(state => ({
      counter: state.counter + 1,
    }));
    this.setState(state => ({
      counter: state.counter + 1,
    }));
    this.setState(state => ({
      counter: state.counter + 1,
    }));
    this.setState(state => ({
      counter: state.counter + 1,
    }));
    this.setState(state => ({
      counter: state.counter + 1,
    }));
  }

  render() {
    const { counter } = this.state;
    console.log(this.state.counter);
    return (
      <Fragment>
        <Simple var={counter} />
        <Pure var={counter} />
      </Fragment>
    );
  }
}
