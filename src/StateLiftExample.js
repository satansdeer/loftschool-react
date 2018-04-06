import React, { Component } from 'react';

class LiftStateExample extends Component {
  state = {
    email: '',
    firstName: '',
    lastName: '',
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        {Object.keys(this.state).map(
          fieldName => (
            <input
              key={fieldName}
              name={fieldName}
              value={this.state[fieldName]}
              placeholder={fieldName.toUpperCase()}
              onChange={this.handleChange}
            />
          ),
        )}
      </div>
    );
  }
}

export default LiftStateExample;
