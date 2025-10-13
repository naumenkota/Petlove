import Container from "./components/Container/Container";
import LoginForm from "./components/LoginForm/LoginForm";
import RegostrationForm from "./components/RegistrationForm/RegistrationForm";
import MainPage from "./pages/MainPage/MainPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <>
      <Container>
        <RegostrationForm />
      </Container>
    </>
  );
}

export default App;
