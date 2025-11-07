import LogOutBtn from "../LogOutBtn/LogOutBtn";
import UserBar from "../UserBar/UserBar";
import { useMediaQuery } from "react-responsive";
import s from "./UserNav.module.css";

export default function UserNav({ isHomePage }) {
  const tab = useMediaQuery({ minWidth: 768 });
  return (
    <div className={s.wrapper}>
      {tab && <LogOutBtn isHomePage={isHomePage} />}
      <UserBar />
    </div>
  );
}
