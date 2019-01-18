import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import "./App.css";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const Input = ({ input, meta, label }) => {
  return (
    <>
      <p>{label}</p>
      <input {...input} />
      {meta.error && meta.visited && !meta.active && (
        <pre style={{ color: "red" }}>{meta.error}</pre>
      )}
    </>
  );
};

const onSubmit = () => {
  console.log("Submit");
};

const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "First name is required";
  }
  return errors;
};

const validateLastName = async value => {
  if (!value) {
    return "Last name is required";
  }

  await sleep(500);

  if (value === "test") {
    return "Last name taken";
  }
};

class App extends Component {
  render() {
    return (
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit, pristine, invalid }) => (
          <form onSubmit={handleSubmit}>
            <Field name="firstName" label="First name" component={Input} />
            <Field
              name="lastName"
              label="Last name"
              component={Input}
              validate={validateLastName}
            />
            <Field name="email" label="Email" component={Input} />
          </form>
        )}
      />
    );
  }
}

export default App;
