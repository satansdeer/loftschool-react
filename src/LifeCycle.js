import React, { Component } from 'react';

export class LifeCycle extends Component {
  static defaultProps = {};

  state = {
    creditCardInput: this.props.creditCard,
  };
  constructor(props) {
    super(props);
    console.log('constructor');
    console.log(props);
    this.div = React.createRef()
    console.log(this.div)
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
    console.log(this.div.current.getBoundingClientRect())
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

  // unsafe / deprecated

  // componentWillReceiveProps(nextProps) {
  //   this.props !== nextProps
  //   console.log('componentWillReceiveProps');
  // }

  // componentWillMount() {
  //   console.log('componentWillMount');
  // }

  // componentWillUpdate(nextProps, nextState) {
  //   this.props !== nextProps
  //   this.state !== nextState
  //   console.log('componentWillUpdate');
  // }

  render() {
    console.log('render');
    const { creditCardInput } = this.state;
    return <div ref={this.div}>{creditCardInput}</div>;
  }
}

export default LifeCycle;
