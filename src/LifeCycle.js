import React, { Component } from 'react';

export class LifeCycle extends Component {
  state = {
    creditCardInput: this.props.creditCard,
  };

  constructor(props) {
    super(props);
    console.log('constructor');
    console.log(props);
    this.someDiv = React.createRef()
    console.log(this.someDiv)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    return {
      creditCardInput: nextProps.creditCard
        .replace(/(\d{0,4})/g, '$1 ')
        .trim(),
    };
  }

  componentDidMount() {
    console.log(this.someDiv.current.getBoundingClientRect())
    console.log('componentDidMount');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
  }

  render() {
    console.log('render');
    const { creditCardInput } = this.state;
    return <div ref={this.someDiv}>{creditCardInput}</div>;
  }
}

export default LifeCycle;
