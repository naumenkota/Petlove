import s from "./PetBlock.module.css";

export default function PetBlock({
  mob1x,
  mob2x,
  tab1x,
  tab2x,
  desk1x,
  desk2x,
  className,
}) {
  return (
    <div className={`${s.wrapper} ${className || ""}`}>
      <picture>
        <source
          media="(min-width: 1280px)"
          srcSet={`${desk1x} 1x, ${desk2x} 2x`}
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${tab1x} 1x, ${tab2x} 2x`}
        />
        <source
          media="(max-width: 767px)"
          srcSet={`${mob1x} 1x, ${mob2x} 2x`}
        />

        <img src={desk1x} alt="Pet" />
      </picture>
    </div>
  );
}
