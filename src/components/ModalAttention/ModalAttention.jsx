import s from "./ModalAttention.module.css";
import CloseIcon from "../../assets/icons/close.svg?react";
import dog from "../../assets/images/dog/dog.webp";
import dog2x from "../../assets/images/dog/dog2x.webp";

export default function ModalAttention() {
  return (
    <div className={s.wrapper}>
      <CloseIcon className={s.close} />

      <div className={s.dog_wrapper}>
        <picture>
          <source srcset={`${dog} 1x, ${dog2x} 2x`} type="image/webp" />
          <img src={dog} alt="Dog" />
        </picture>
      </div>

      <h3 className={s.title}>Attention</h3>
      <p className={s.text}>
        We would like to remind you that certain functionality is available only
        to authorized users.If you have an account, please log in with your
        credentials. If you do not already have an account, you must register to
        access these features.
      </p>
      <div className={s.btn_wrapper}>
        <button className={s.btn_log}>Log In</button>
        <button className={s.btn_reg}>Registration</button>
      </div>
    </div>
  );
}
