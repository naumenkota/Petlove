import s from "./ModalApproveAction.module.css";
import CloseIcon from "../../assets/icons/close.svg?react";
import cat from "../../assets/images/cat/cat.webp";
import cat2x from "../../assets/images/cat/cat2x.webp";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/api/api.js";

export default function ModalApproveAction({ onClose }) {
  const dispatch = useDispatch();

  const handleExit = () => {
    dispatch(logout());
    onClose();
  };

  return (
    <div className={s.wrapper}>
      <button className={s.btn_close} onClick={onClose}>
        <CloseIcon />
      </button>

      <div className={s.cat_wrapper}>
        <picture>
          <source srcSet={`${cat} 1x, ${cat2x} 2x`} type="image/webp" />
          <img src={cat} alt="Cat" />
        </picture>
      </div>

      <p className={s.text}>Already leaving?</p>

      <div className={s.btn_wrapper}>
        <button className={s.btn_yes} onClick={handleExit}>
          Yes
        </button>
        <button className={s.btn_cancel} onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}
