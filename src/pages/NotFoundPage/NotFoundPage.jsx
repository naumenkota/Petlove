import s from "./NotFoundPage.module.css";
import notFoundMob1x from "../../assets/images/not-found/not-found-mob.webp";
import notFoundMob2x from "../../assets/images/not-found/not-found2x-mob.webp";
import notFound1x from "../../assets/images/not-found/not-found.webp";
import notFound2x from "../../assets/images/not-found/not-found2x.webp";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>
        4
        <span>
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet={`${notFoundMob1x} 1x, ${notFoundMob2x} 2x`}
            />
            <source
              media="(min-width: 768px)"
              srcSet={`${notFound1x} 1x, ${notFound2x} 2x`}
            />
            <img src={notFound1x} alt="Cat" />
          </picture>
        </span>
        4
      </h2>
      <div className={s.wrapper_btn}>
        <p className={s.text}>Ooops! This page not found :(</p>

        <Link to="/home" className={s.btn}>
          To home page
        </Link>
      </div>
    </div>
  );
}
