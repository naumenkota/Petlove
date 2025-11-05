import s from "./PetsList.module.css";
import PetsItem from "../PetsItem/PetsItem";
import { useSelector } from "react-redux";

export default function PetsList() {
  const pets = useSelector((state) => state.auth.user.pets || []);

  if (!pets.length) return <p>You don't have any pets yet.</p>;

  return (
    <div className={s.wrapper}>
      {pets.map((pet) => (
        <PetsItem key={pet._id} pet={pet} />
      ))}
    </div>
  );
}
