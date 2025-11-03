import EditUserBtn from "../EditUserBtn/EditUserBtn";
import UserBlock from "../UserBlock/UserBlock";
import s from "./UserCard.module.css";
import EditIcon from "../../../assets/icons/edit.svg?react";

export default function UserCard() {
  return (
    <div className={s.wrapper}>
      <EditUserBtn>
        <EditIcon />
      </EditUserBtn>
      <UserBlock />
    </div>
  );
}
