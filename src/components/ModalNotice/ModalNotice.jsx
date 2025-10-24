import s from "./ModalNotice.module.css";
import CloseIcon from "../../assets/icons/close.svg?react";
import { useState } from "react";

export default function ModalNotice({ notices }) {
  const [isOpen, setIsOpen] = useState(true);
  if (!isOpen) return null;

  return (
    <div className={s.wrapper}>
      <CloseIcon className={s.close} onClick={() => setIsOpen(false)} />
      <img src={notices.imgURL} alt={notices.title} className={s.img} />
      <h3 className={s.title}>{notices.title}</h3>
      <div className={s.popularity_wrapper}>
        <StarIcon />
        <p className={s.rate}>{Math.floor(notices.popularity / 1000)}</p>
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
      </div>

      <p className={s.comment}>{notices.comment}</p>

      {notices.price !== undefined ? (
        <p className={s.price}>${notices.price}</p>
      ) : (
        <div className={s.price_none} />
      )}

      <button>Add to</button>
      <button> Contact</button>
    </div>
  );
}
