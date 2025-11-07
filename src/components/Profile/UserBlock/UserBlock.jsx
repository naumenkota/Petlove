import s from "./UserBlock.module.css";
import { useSelector } from "react-redux";
import authSelectors from "../../../redux/auth/authSelectors";

import EditUserBtn from "../EditUserBtn/EditUserBtn.jsx";
import UserIcon from "../../../assets/icons/user.svg?react";

export default function UserBlock() {
  const avatar = useSelector(authSelectors.selectUserAvatar);
  const name = useSelector(authSelectors.selectName);
  const email = useSelector(authSelectors.selectEmail);
  const phone = useSelector(authSelectors.selectPhone);
  console.log("UserBlock render:", { avatar, name, email, phone });

  return (
    <div className={s.wrapper}>
      {avatar ? (
        <img src={avatar} alt="User avatar" className={s.avatar} />
      ) : (
        <div className={s.edit_wrapper}>
          <EditUserBtn variant="user_photo">
            <UserIcon />
          </EditUserBtn>
          <EditUserBtn variant="text">
            <p>Upload photo</p>
          </EditUserBtn>
        </div>
      )}

      <h3 className={s.title}>My information</h3>

      <div className={s.info_wrapper}>
        <p className={s.info}>{name}</p>
        <p className={s.info}>{email}</p>
        {phone ? (
          <p className={s.info}>{phone}</p>
        ) : (
          <p className={s.info}>+380</p>
        )}
      </div>
    </div>
  );
}
