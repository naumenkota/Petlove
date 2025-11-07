import UserCard from "../../components/Profile/UserCard/UserCard";
import MyNotices from "../../components/Profile/MyNotices/MyNotices";
import s from "./ProfilePage.module.css";

export default function ProfilePage() {
  return (
    <div className={s.wrapper}>
      <UserCard />
      <MyNotices />
    </div>
  );
}
