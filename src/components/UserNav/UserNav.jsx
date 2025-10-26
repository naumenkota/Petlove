import LogOutBtn from "../LogOutBtn/LogOutBtn";
import UserBar from "../UserBar/UserBar";
import { useMediaQuery } from "react-responsive";

export default function UserNav() {
  const tab = useMediaQuery({ minWidth: 768 });
  return (
    <>
      {tab && <LogOutBtn />}
      <UserBar />
    </>
  );
}
