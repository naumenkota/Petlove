import { NavLink } from "react-router-dom";
import s from "./AddPet.module.css";
import PlusIcon from "../../../assets/icons/plus.svg?react";

export default function AddPet() {
  return (
    <>
      <NavLink to="/add-pet">
        <button type="button" className={s.btn}>
          Add pet
          <PlusIcon />
        </button>
      </NavLink>
    </>
  );
}
