import { NavLink } from "react-router-dom";
import s from "./AddPet.module.css";
import PlusIcon from "../../../assets/icons/plus.svg?react";

export default function AddPet() {
  return (
    <div className={s.wrapper}>
      <h4 className={s.title}>My pets</h4>
      <NavLink to="/add-pet">
        <button type="button" className={s.btn}>
          Add pet
          <PlusIcon />
        </button>
      </NavLink>
    </div>
  );
}
