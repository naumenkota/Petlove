import s from "./Nav.module.css";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

export default function Nav({ isHomePage }) {
  const active = ({ isActive }) =>
    clsx(s.navLink, isActive && s.active, isHomePage && s.home);

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
