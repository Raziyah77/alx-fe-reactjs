import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const FormikForm = () => {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("User Registered:", values);
        alert("User registered successfully!");
      }}
    >
      <Form style={{ display: "flex", flexDirection: "column", gap: "10px", width: "250px" }}>
        <h3>Formik Registration Form</h3>

        <Field name="username" type="text" placeholder="Username" />
        <ErrorMessage name="username" component="div" style={{ color: "red" }} />

        <Field name="email" type="email" placeholder="Email" />
        <ErrorMessage name="email" component="div" style={{ color: "red" }} />

        <Field name="password" type="password" placeholder="Password" />
        <ErrorMessage name="password" component="div" style={{ color: "red" }} />

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
