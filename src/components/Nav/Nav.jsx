import s from "./Nav.module.css";
import { useMediaQuery } from "react-responsive";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import MenuIcon from "../../assets/icons/menu.svg?react";
import CloseIcon from "../../assets/icons/close.svg?react";
import AuthNav from "../AuthNav/AuthNav";
export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const active = ({ isActive }) => {
    return clsx(s.navLink, isActive && s.active);
  };
  const tab = useMediaQuery({ minWidth: 768 });
  const desktop = useMediaQuery({ minWidth: 1280 });

  return (
    <nav className={s.nav}>
      <div className={s.wrapper}>
        {!isOpen && tab && !desktop && (
          <div className={s.auth_wrapper}>
            <AuthNav />
          </div>
        )}

        {!isOpen && !desktop && (
          <button onClick={() => setIsOpen(true)} className={s.burger}>
            <MenuIcon />
          </button>
        )}
      </div>

      <div className={`${s.menuWrapper} ${isOpen || desktop ? s.open : ""}`}>
        {!desktop && (
          <button onClick={() => setIsOpen(false)} className={s.close}>
            <CloseIcon />
          </button>
        )}

        <ul className={s.list}>
          <li>
            <NavLink to="/news" end className={active}>
              News
            </NavLink>
          </li>
          <li>
            <NavLink to="/notices" end className={active}>
              Find pet
            </NavLink>
          </li>
          <li>
            <NavLink to="/friends" end className={active}>
              Our friends
            </NavLink>
          </li>
        </ul>

        <AuthNav />
      </div>
    </nav>
  );
}
