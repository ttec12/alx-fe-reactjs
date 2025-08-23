import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

function App() {
  return (
    <div className="p-8">
      <RegistrationForm />
      <hr className="my-8" />
      <FormikForm />
    </div>
  );
}

export default App;