import s from "./HomePage.module.css";
import HeroImage from "../../components/HeroImage/HeroImage";

export default function HomePage() {
  return (
    <section>
      <div className={s.hero}>
        <h1 className={s.title}>
          Take good <span>care</span> of your small pets
        </h1>
        <p className={s.text}>
          Choosing a pet for your home is a choice that is meant to enrich your
          life with immeasurable joy and tenderness.
        </p>
      </div>
      <HeroImage />
    </section>
  );
}
