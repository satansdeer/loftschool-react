import React, { Component } from 'react';

export class PersistEvent extends Component {
  handleClick = event => {
    console.log(event.target);
    event.persist()
    setTimeout(() => {
      console.log(event.target);
    }, 1);
  };

  render() {
    return (
      <button onClick={this.handleClick}>Click</button>
    );
  }
}

export default PersistEvent;
