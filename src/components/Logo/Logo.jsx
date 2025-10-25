import { useMediaQuery } from "react-responsive";
import LogoMob from "../../assets/logo/logo-mobile.svg?react";
import LogoTab from "../../assets/logo/logo-tab.svg?react";
import s from "./Logo.module.css";

export default function Logo() {
  const tab = useMediaQuery({ minWidth: 768 });
  return <div className={s.logo}>{tab ? <LogoTab /> : <LogoMob />}</div>;
}
