import React, { Component } from "react";
import "./App.css";
import { Formik, Field } from "formik";

const Input = props => {
  console.log(props);
  return <input {...props} />;
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

  render() {
    return (
      <Formik
        onSubmit={(a, b) => console.log(a, b)}
        initialValues={{ email: "123", password: "123" }}
        validate={values => {
          const errors = {
            email: "",
            password: ""
          };

          if (!values.email.includes("@")) {
            errors.email = "Invalid";
          }

          return errors;
        }}
        render={({ handleSubmit, touched, errors }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Field type="email" name="email" component={Input} />
              {touched.email && errors.email && <div>{errors.email}</div>}
              <Field type="password" name="password" />
              {touched.password && errors.password && (
                <div>{errors.password}</div>
              )}
              <button type="submit">Submit</button>
            </form>
          );
        }}
      />
    );
  }
}

export default App;
