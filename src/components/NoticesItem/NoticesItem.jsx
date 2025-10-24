import s from "./NoticesItem.module.css";
import StarIcon from "../../assets/icons/star.svg?react";
import HeartIcon from "../../assets/icons/heart.svg?react";

export default function NoticesItem({ notices, onLearnMore }) {
  return (
    <div className={s.wrapper}>
      <img src={notices.imgURL} alt={notices.title} className={s.img} />
      <div className={s.title_wrapper}>
        <h3 className={s.title}>{notices.title}</h3>
        <div className={s.popularity_wrapper}>
          <StarIcon className={s.icon} />
          <p className={s.rate}>{Math.floor(notices.popularity / 1000)}</p>
        </div>
      </div>
      <div className={s.info_wrapper}>
        <div className={s.info}>
          <p className={s.info_key}>Name</p>
          <p className={s.info_value}>{notices.name}</p>
        </div>

        <div className={s.info}>
          <p className={s.info_key}>Birthday</p>
          <p className={s.info_value}>
            {new Date(notices.birthday).toLocaleDateString("uk-UA")}
          </p>
        </div>

        <div className={s.info}>
          <p className={s.info_key}>Sex</p>
          <p className={s.info_value}>{notices.sex}</p>
        </div>

        <div className={s.info}>
          <p className={s.info_key}>Species</p>
          <p className={s.info_value}>{notices.species}</p>
        </div>

        <div className={s.info}>
          <p className={s.info_key}>Category</p>
          <p className={s.info_value}>{notices.category}</p>
        </div>
      </div>
      <p className={s.comment}>{notices.comment}</p>

      {notices.price !== undefined ? (
        <p className={s.price}>${notices.price}</p>
      ) : (
        <div className={s.price_none} />
      )}

      <div className={s.btn_wrapper}>
        <button
          type="button"
          className={s.btn}
          onClick={() => onLearnMore(notices)}
        >
          Learn more
        </button>
        <HeartIcon className={s.heart} />
      </div>
    </div>
  );
}
