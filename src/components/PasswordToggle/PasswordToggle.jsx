import s from "./PasswordToggle.module.css";
import EyeIcon from "../../assets/icons/eye.svg?react";
import EyeOffIcon from "../../assets/icons/eye-off.svg?react";

export default function PasswordToggle({ show, toggle }) {
  return (
    <button type="button" onClick={toggle} className={s.eyeIcon}>
      {show ? <EyeIcon /> : <EyeOffIcon />}
    </button>
  );
}
