import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import MainPage from "./pages/MainPage/MainPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import OurFriendsPage from "./pages/OurFriendsPage/OurFriendsPage";
import HomePage from "./pages/HomePage/HomePage";
import AddPetPage from "./pages/AddPetPage/AddPetPage";
import MainLayout from "./components/MainLayout/MainLayout";

import ProfilePage from "./pages/ProfilePage/ProfilePage";
import NoticesPage from "./pages/NoticesPage/NoticesPage";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/notices" element={<NoticesPage />} />
          <Route path="/friends" element={<OurFriendsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute redirectTo="/login">
                <ProfilePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/add-pet"
            element={
              <PrivateRoute redirectTo="/login">
                <AddPetPage />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
