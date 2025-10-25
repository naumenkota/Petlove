import s from "./Nav.module.css";
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

  return (
    <nav className={s.nav}>
      {!isOpen && (
        <button onClick={() => setIsOpen(true)} className={s.burger}>
          <MenuIcon />
        </button>
      )}

      <div className={`${s.menuWrapper} ${isOpen ? s.open : ""}`}>
        <button onClick={() => setIsOpen(false)} className={s.close}>
          <CloseIcon />
        </button>

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
