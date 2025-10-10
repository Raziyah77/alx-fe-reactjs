import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

function FormikForm() {
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return React.createElement(
    "div",
    null,
    React.createElement("h3", null, "Formik Registration Form"),
    React.createElement(Formik, {
      initialValues: { username: "", email: "", password: "" },
      validationSchema: validationSchema,
      onSubmit: (values, { resetForm }) => {
        alert("Form submitted successfully!");
        console.log(values);
        resetForm();
      },
      children: (formik) =>
        React.createElement(
          "form",
          {
            onSubmit: formik.handleSubmit,
            style: {
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              width: "250px",
            },
          },
          React.createElement("input", {
            name: "username",
            type: "text",
            placeholder: "Username",
            onChange: formik.handleChange,
            value: formik.values.username,
          }),
          formik.errors.username &&
            React.createElement(
              "div",
              { style: { color: "red" } },
              formik.errors.username
            ),

          React.createElement("input", {
            name: "email",
            type: "email",
            placeholder: "Email",
            onChange: formik.handleChange,
            value: formik.values.email,
          }),
          formik.errors.email &&
            React.createElement(
              "div",
              { style: { color: "red" } },
              formik.errors.email
            ),

          React.createElement("input", {
            name: "password",
            type: "password",
            placeholder: "Password",
            onChange: formik.handleChange,
            value: formik.values.password,
          }),
          formik.errors.password &&
            React.createElement(
              "div",
              { style: { color: "red" } },
              formik.errors.password
            ),

          React.createElement(
            "button",
            { type: "submit" },
            "Register"
          )
        ),
    })
  );
}

export default FormikForm;
