import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li>
          <NavLink to="/login" className={s.login}>
            Log in
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" className={s.register}>
            Registration
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
