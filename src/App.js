import React, { Component } from 'react';
import Title from './Title';

export class App extends Component {
  state = {
    test: '',
    counter: 3,
  };

  handleChange = event => {

    this.setState({
      [event.target.name]:
        event.target.value,
    });
  };

  render() {
    const { counter } = this.state;
    return (
      <div>
        <Title
          counter={counter}
          fontSize={30}
        >
          123
        </Title>
        <input
          name="test"
          onChange={this.handleChange}
          value={this.state.test}
        />
      </div>
    );
  }
}

export default App;
