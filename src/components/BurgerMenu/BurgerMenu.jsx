import s from "./BurgerMenu.module.css";
import MenuIcon from "../../assets/icons/menu.svg?react";
import CloseIcon from "../../assets/icons/close.svg?react";
import { useState } from "react";
import Nav from "../Nav/Nav.jsx";
import AuthNav from "../AuthNav/AuthNav.jsx";
import authSelectors from "../../redux/auth/authSelectors.js";
import { useSelector } from "react-redux";
import LogOutBtn from "../LogOutBtn/LogOutBtn.jsx";

export default function BurgerMenu({ isHomePage }) {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <div className={`${s.wrapper} ${isHomePage ? s.home : ""}`}>
      <button onClick={() => setIsOpen(true)} className={s.burger}>
        <MenuIcon />
      </button>
      <div className={`${s.menuWrapper} ${isOpen ? s.open : ""}`}>
        <button onClick={() => setIsOpen(false)} className={s.close}>
          <CloseIcon />
        </button>

        <Nav />
        {isLoggedIn ? <LogOutBtn /> : <AuthNav />}
      </div>
    </div>
  );
}
