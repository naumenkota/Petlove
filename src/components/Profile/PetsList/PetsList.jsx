import s from "./PetsList.module.css";
import PetsItem from "../PetsItem/PetsItem";
import { useSelector } from "react-redux";

export default function PetsList() {
  const pets = useSelector((state) => state.auth.user.pets || []);

  return (
    <div className={s.wrapper}>
      {pets.map((pet) => (
        <PetsItem key={pet._id} pet={pet} />
      ))}
    </div>
  );
}
