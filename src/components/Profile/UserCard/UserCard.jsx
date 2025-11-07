import EditUserBtn from "../EditUserBtn/EditUserBtn";
import UserBlock from "../UserBlock/UserBlock";
import s from "./UserCard.module.css";
import EditIcon from "../../../assets/icons/edit.svg?react";
import LogOutBtn from "../../LogOutBtn/LogOutBtn";
import PetsBlock from "../PetsBlock/PetsBlock";

export default function UserCard() {
  return (
    <div className={s.wrapper}>
      <div className={s.btn_wrapper}>
        <EditUserBtn>
          <EditIcon />
        </EditUserBtn>
      </div>
      <UserBlock />
      <PetsBlock />
      <LogOutBtn />
    </div>
  );
}
