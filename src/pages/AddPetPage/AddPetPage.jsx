import AddPetForm from "../../components/AddPetForm/AddPetForm.jsx";
import PetBlock from "../../components/PetBlock/PetBlock.jsx";
import mob1x from "../../assets/images/add-pet/addpet-mob.webp";
import mob2x from "../../assets/images//add-pet/addpet2x-mob.webp";
import tab1x from "../../assets/images/add-pet/addpet-tab.webp";
import tab2x from "../../assets/images/add-pet/addpet2x-tab.webp";
import desk1x from "../../assets/images/add-pet/addpet.webp";
import desk2x from "../../assets/images/add-pet/addpet2x.webp";
import s from "./AddPetPage.module.css";

export default function AddPetPage() {
  return (
    <div className={s.wrapper}>
      <PetBlock
        mob1x={mob1x}
        mob2x={mob2x}
        tab1x={tab1x}
        tab2x={tab2x}
        desk1x={desk1x}
        desk2x={desk2x}
        className={s.customSize}
      />
      <AddPetForm />
    </div>
  );
}
