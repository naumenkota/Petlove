import s from "./Nav.module.css";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const active = ({ isActive }) => {
    return clsx(s.navLink, isActive && s.active);
  };

  return (
    <nav className={s.nav}>
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
    </nav>
  );
}
