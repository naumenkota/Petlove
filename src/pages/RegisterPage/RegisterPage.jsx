import s from "./RegisterPage.module.css";
import PetBlock from "../../components/PetBlock/PetBlock";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import mob1x from "../../assets/images/regist/regist-mob.webp";
import mob2x from "../../assets/images/regist/regist2x-mob.webp";
import tab1x from "../../assets/images/regist/regist-tab.webp";
import tab2x from "../../assets/images/regist/regist2x-tab.webp";
import desk1x from "../../assets/images/regist/regist.webp";
import desk2x from "../../assets/images/regist/regist2x.webp";

export default function RegisterPage() {
  return (
    <div className={s.wrapper}>
      <PetBlock
        mob1x={mob1x}
        mob2x={mob2x}
        tab1x={tab1x}
        tab2x={tab2x}
        desk1x={desk1x}
        desk2x={desk2x}
      />
      <RegistrationForm />
    </div>
  );
}
