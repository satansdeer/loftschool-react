import React, { PureComponent, Component } from 'react';
import { getShowInfo } from './api';

class App extends PureComponent {
  state = {
    show: '',
  };
  changeShow = event => {
    this.setState({ show: event.target.innerHTML });
  };
  render() {
    const { show } = this.state;
    return (
      <div>
        <button onClick={this.changeShow}>house</button>
        <button onClick={this.changeShow}>
          santaBarbara
        </button>
        <button onClick={this.changeShow}>bigBang</button>
        <Show show={show} />
      </div>
    );
  }
}

class Show extends Component {
  state = {
    show: '',
    data: null,
    counter: 0,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    return nextProps.show !== prevState.show
      ? { data: null, show: nextProps.show }
      : null;
  }

  changeData = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 }, () => {
      console.log(this.state.counter)
    });
  };

  render() {
    const { counter } = this.state;

    return <div onClick={this.changeData}>{counter}</div>;
  }
}

export default App;
