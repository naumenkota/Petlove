import { Outlet, useLocation } from "react-router-dom";
import Container from "../Container/Container.jsx";
import Header from "../Header/Header.jsx";

export default function MainLayout() {
  const location = useLocation();
  const hideHeader = location.pathname === "/";
  return (
    <Container>
      {!hideHeader && <Header />}
      <main>
        <Outlet />
      </main>
    </Container>
  );
}
