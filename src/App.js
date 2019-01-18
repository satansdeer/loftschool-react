import React, { Component } from "react";
import "./App.css";

const validate = (name, value) => {
  switch (name) {
    case "firstName":
      return "ERROR";
    default:
      return null;
  }
};

class App extends Component {
  state = {
    values: {
      firstName: "",
      lastName: "",
      email: ""
    },
    errors: {
      firstName: "",
      lastName: "",
      email: ""
    }
  };

  handleChangeInput = event => {
    const { name, value } = event.target;
    const error = validate(name, value);
    this.setState({
      errors: { ...this.state.errors, [name]: error }
    });
    this.setState({
      values: { ...this.state.values, [name]: value }
    });
  };

  render() {
    const { values, errors } = this.state;
    return (
      <div>
        <input
          name="firstName"
          value={values.firstName}
          onChange={this.handleChangeInput}
        />
        {errors.firstName !== "" && <p>{errors.firstName}</p>}
        <input
          name="lastName"
          value={values.lastName}
          onChange={this.handleChangeInput}
        />
        {errors.lastName !== "" && <p>{errors.lastName}</p>}
        <input
          name="email"
          value={values.email}
          onChange={this.handleChangeInput}
        />
        {errors.email !== "" && <p>{errors.email}</p>}
      </div>
    );
  }
}

export default App;
