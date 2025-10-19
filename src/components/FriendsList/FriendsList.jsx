import { useDispatch, useSelector } from "react-redux";
import FriendsItem from "../FriendsItem/FriendsItem";
import { getFriends } from "../../redux/api/api";
import { useEffect } from "react";
import s from "./FriendsList.module.css";

export default function FriendsList() {
  const dispatch = useDispatch();
  const { items, isLoading } = useSelector((state) => state.friends);

  useEffect(() => {
    dispatch(getFriends());
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <ul className={s.list}>
        {items.map((friends) => (
          <li key={friends._id}>
            <FriendsItem
              title={friends.title}
              phone={friends.phone}
              imageUrl={friends.imageUrl}
              email={friends.email}
              address={friends.address}
              addressUrl={friends.addressUrl}
              workDays={friends.workDays}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
