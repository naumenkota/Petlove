import s from "./MainPage.module.css";
import LogoMainMob from "../../assets/logo/logo-main-mob.svg?react";
import LogoMain from "../../assets/logo/logo-main.svg?react";
import { useMediaQuery } from "react-responsive";

export default function MainPage() {
  const mobile = useMediaQuery({ maxWidth: 767 });
  return (
    <div className={s.main}>{mobile ? <LogoMainMob /> : <LogoMain />}</div>
  );
}
