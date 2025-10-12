import Container from "./components/Container/Container";
import MainPage from "./pages/MainPage/MainPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <>
      <Container>
        <NotFoundPage />
      </Container>
    </>
  );
}

export default App;
