import s from "./NoticesItem.module.css";
import StarIcon from "../../assets/icons/star.svg?react";
import HeartIcon from "../../assets/icons/heart.svg?react";
import DeleteIcon from "../../assets/icons/delete.svg?react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/api/api";
import toast from "react-hot-toast";
import { getNoticeId } from "../../redux/api/api";

export default function NoticesItem({ notices, onLearnMore }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const loading = useSelector((state) => state.favorites.loading);
  const isFavorite = favorites.some((item) => item._id === notices._id);
  const handleFavorite = async () => {
    try {
      if (!isFavorite) {
        await dispatch(
          addFavorite({ id: notices._id, item: notices })
        ).unwrap();
      } else {
        await dispatch(removeFavorite(notices._id)).unwrap();
      }
    } catch (error) {
      toast.error(error || "Something went wrong");
    }
  };

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
          onClick={() => {
            dispatch(getNoticeId(notices._id));
            onLearnMore(notices);
          }}
        >
          Learn more
        </button>
        <button
          type="button"
          className={`${s.heart_btn} ${isFavorite ? s.active : ""}`}
          onClick={handleFavorite}
          disabled={loading}
        >
          {isFavorite ? <DeleteIcon /> : <HeartIcon />}
        </button>
      </div>
    </div>
  );
}
