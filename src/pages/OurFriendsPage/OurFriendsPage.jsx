import Title from "../../components/Title/Title";
import FriendsList from "../../components/FriendsList/FriendsList";
import s from "./OurFriendsPage.module.css";

export default function OurFriendsPage() {
  return (
    <div className={s.wrapper}>
      <Title>Our friends</Title>
      <FriendsList />
    </div>
  );
}
