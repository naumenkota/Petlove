import Container from "./components/Container/Container";
import LoginForm from "./components/LoginForm/LoginForm";
import MainPage from "./pages/MainPage/MainPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <>
      <Container>
        <LoginForm />
      </Container>
    </>
  );
}

export default App;
