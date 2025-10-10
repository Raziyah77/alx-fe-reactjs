import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>User Registration Forms</h1>

      <section style={{ marginBottom: "40px" }}>
        <RegistrationForm />
      </section>

      <section>
        <FormikForm />
      </section>
    </div>
  );
}

export default App;
