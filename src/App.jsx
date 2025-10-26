import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Container from "./components/Container/Container";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import MainPage from "./pages/MainPage/MainPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import OurFriendsPage from "./pages/OurFriendsPage/OurFriendsPage";
import NoticesList from "./components/NoticesList/NoticesList";
import ModalAttention from "./components/ModalAttention/ModalAttention";

import MainLayout from "./components/MainLayout/MainLayout";
import ModalApproveAction from "./components/ModalApproveAction/ModalApproveAction";
import LogOutBtn from "./components/LogOutBtn/LogOutBtn";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <Routes>
        <Route path="/modal" element={<LogOutBtn />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="/notices" element={<NoticesList />} />
          <Route path="/friends" element={<OurFriendsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
