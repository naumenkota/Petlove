import s from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import MenuIcon from "../../assets/icons/menu.svg?react";
import CloseIcon from "../../assets/icons/close.svg?react";
export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

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
          <li className={s.list_item}>
            <NavLink to="/news" end>
              News
            </NavLink>
          </li>
          <li className={s.list_item}>
            <NavLink to="/notices" end>
              Find pet
            </NavLink>
          </li>
          <li className={s.list_item}>
            <NavLink to="/friends" end>
              Our friends
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
