import { Outlet } from "react-router-dom";

import Container from "../Container/Container.jsx";
import Header from "../Header/Header.jsx";

export default function MainLayout() {
  return (
    <Container>
      <Header />
      <main>
        <Outlet />
      </main>
    </Container>
  );
}
