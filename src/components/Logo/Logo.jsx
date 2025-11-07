import { useMediaQuery } from "react-responsive";
import LogoMob from "../../assets/logo/logo-mobile.svg?react";
import LogoTab from "../../assets/logo/logo-tab.svg?react";
import WhiteLogo from "../../assets/logo/logo-white.svg?react";
import WhiteLogoMob from "../../assets/logo/logo-mobile-white.svg?react";
import s from "./Logo.module.css";
import { Link } from "react-router-dom";
export default function Logo({ isHomePage }) {
  const tab = useMediaQuery({ minWidth: 768 });

  return (
    <Link to="/home" className={s.logo}>
      {isHomePage ? (
        tab ? (
          <WhiteLogo />
        ) : (
          <WhiteLogoMob />
        )
      ) : tab ? (
        <LogoTab />
      ) : (
        <LogoMob />
      )}
    </Link>
  );
}
