import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Formik Form Submitted:", values);
    alert("Registration successful!");
    resetForm();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
          <h2 className="text-xl font-bold mb-4 text-center">Register (Formik)</h2>

          <label className="block mb-2">
            Username:
            <Field
              name="username"
              type="text"
              className="border border-gray-300 w-full px-3 py-2 rounded mt-1"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </label>

          <label className="block mb-2">
            Email:
            <Field
              name="email"
              type="email"
              className="border border-gray-300 w-full px-3 py-2 rounded mt-1"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </label>

          <label className="block mb-4">
            Password:
            <Field
              name="password"
              type="password"
              className="border border-gray-300 w-full px-3 py-2 rounded mt-1"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </label>

          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 w-full rounded hover:bg-green-600"
          >
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormikForm;
