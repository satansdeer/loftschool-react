import React from "react";
import { reduxForm, Field } from "redux-form";
import "./App.css";

const customField = ({
  input,
  type,
  placeholder,
  id,
  meta: { touched, error },
  ...rest
}) => {
  return (
    <div>
      <input {...input} placeholder={placeholder} type={type} id={id} />
      {touched && error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

const myValidator = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "First name is required";
  }
  return errors;
};

const WrappedForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit(val => console.log(val))}>
      <div>
        <Field
          name="firstName"
          type="text"
          id="first-name"
          placeholder="Maksim"
          component={customField}
        />
        <Field
          name="lastName"
          type="text"
          id="last-name"
          placeholder="Ivanov"
          component={customField}
        />
        <Field
          name="email"
          type="email"
          id="email"
          placeholder="maksim@ivanov.com"
          component={customField}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default reduxForm({
  form: "wrappedForm",
  validate: myValidator
})(WrappedForm);
