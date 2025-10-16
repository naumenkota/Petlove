import { Toaster } from "react-hot-toast";
import Container from "./components/Container/Container";
import LoginForm from "./components/LoginForm/LoginForm";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import MainPage from "./pages/MainPage/MainPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import PetBlock from "./components/PetBlock/PetBlock";

import mob1x from "./assets/images/login/login-mob.webp";
import mob2x from "./assets/images/login/login2x-mob.webp";
import tab1x from "./assets/images/login/login-tab.webp";
import tab2x from "./assets/images/login/login2x-tab.webp";
import desk1x from "./assets/images/login/login.webp";
import desk2x from "./assets/images/login/login2x.webp";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Container>
        <PetBlock
          mob1x={mob1x}
          mob2x={mob2x}
          tab1x={tab1x}
          tab2x={tab2x}
          desk1x={desk1x}
          desk2x={desk2x}
        />
        <RegistrationForm />
        <LoginForm />
      </Container>
    </>
  );
}

export default App;
