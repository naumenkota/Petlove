import HomeMob from "../../assets/images/home/home-mob.webp";
import HomeTab from "../../assets/images/home/home-tab.webp";
import Home from "../../assets/images/home/home.webp";
import HomeMob2x from "../../assets/images/home/home2x-mob.webp";
import HomeTab2x from "../../assets/images/home/home2x-tab.webp";
import Home2x from "../../assets/images/home/home2x.webp";
import s from "./HeroImage.module.css";

export default function HeroImage() {
  return (
    <div className={s.wrapper}>
      <picture>
        <source
          media="(min-width: 1280px)"
          srcSet={`${Home} 1x, ${Home2x} 2x`}
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${HomeTab} 1x, ${HomeTab2x} 2x`}
        />
        <source
          media="(max-width: 767px)"
          srcSet={`${HomeMob} 1x, ${HomeMob2x} 2x`}
        />

        <img src={Home} alt="Pet" />
      </picture>
    </div>
  );
}
