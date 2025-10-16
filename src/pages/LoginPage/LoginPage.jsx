import PetBlock from "../../components/PetBlock/PetBlock";
import LoginForm from "../../components/LoginForm/LoginForm";
import mob1x from "../../assets/images/login/login-mob.webp";
import mob2x from "../../assets/images/login/login2x-mob.webp";
import tab1x from "../../assets/images/login/login-tab.webp";
import tab2x from "../../assets/images/login/login2x-tab.webp";
import desk1x from "../../assets/images/login/login.webp";
import desk2x from "../../assets/images/login/login2x.webp";
import s from "./LoginPage.module.css";

export default function LoginPage() {
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
      <LoginForm />
    </div>
  );
}
