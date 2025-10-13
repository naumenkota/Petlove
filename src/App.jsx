import { Toaster } from "react-hot-toast";
import Container from "./components/Container/Container";
import LoginForm from "./components/LoginForm/LoginForm";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import MainPage from "./pages/MainPage/MainPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Container>
        <RegistrationForm />
        <LoginForm />
      </Container>
    </>
  );
}

export default App;
