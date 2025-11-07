import BurgerMenu from "../BurgerMenu/BurgerMenu.jsx";
import Logo from "../Logo/Logo.jsx";
import Nav from "../Nav/Nav.jsx";
import UserNav from "../UserNav/UserNav.jsx";
import s from "./Header.module.css";
import { useMediaQuery } from "react-responsive";
import authSelectors from "../../redux/auth/authSelectors.js";
import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav.jsx";
import { useLocation } from "react-router-dom";

export default function Header() {
  const desk = useMediaQuery({ minWidth: 1280 });
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const location = useLocation();
  const isHomePage = location.pathname === "/home";

  return (
    <div className={`${s.wrapper} ${isHomePage ? s.home : ""}`}>
      <Logo isHomePage={isHomePage} />

      {desk && <Nav isHomePage={isHomePage} />}
      {desk &&
        (isLoggedIn ? (
          <UserNav isHomePage={isHomePage} />
        ) : (
          <AuthNav isHomePage={isHomePage} />
        ))}

      {!desk && <BurgerMenu isHomePage={isHomePage} />}
    </div>
  );
}
