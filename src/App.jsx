import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Container from "./components/Container/Container";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import MainPage from "./pages/MainPage/MainPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import OurFriendsPage from "./pages/OurFriendsPage/OurFriendsPage";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Container>
        <Routes>
          <Route path="/friends" element={<OurFriendsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
