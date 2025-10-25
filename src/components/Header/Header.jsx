import Logo from "../Logo/Logo.jsx";
import Nav from "../Nav/Nav.jsx";
import s from "./Header.module.css";

export default function Header() {
  return (
    <div className={s.wrapper}>
      <Logo />
      <Nav />
    </div>
  );
}
