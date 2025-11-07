import s from "./PetsItem.module.css";
import DeleteIcon from "../../../assets/icons/delete.svg?react";
import { removePet, getUser } from "../../../redux/api/api";
import { useDispatch } from "react-redux";

export default function PetsItem({ pet }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removePet(pet._id)).then(() => dispatch(getUser()));
  };

  return (
    <div className={s.wrapper}>
      <button className={s.delete_btn} onClick={handleDelete}>
        <DeleteIcon />
      </button>

      <img src={pet.imgURL} alt={pet.name} className={s.img} />
      <div className={s.content_wrapper}>
        <h3 className={s.title}>{pet.title}</h3>

        <div className={s.info}>
          <div className={s.info_div}>
            <p className={s.info_key}>Name</p>
            <p className={s.info_value}>{pet.name}</p>
          </div>
          <div className={s.info_div}>
            <p className={s.info_key}>Birthday</p>
            <p className={s.info_value}>{pet.birthday}</p>
          </div>
          <div className={s.info_div}>
            <p className={s.info_key}>Sex</p>
            <p className={s.info_value}>{pet.sex}</p>
          </div>
          <div className={s.info_div}>
            <p className={s.info_key}>Species</p>
            <p className={s.info_value}>{pet.species}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
