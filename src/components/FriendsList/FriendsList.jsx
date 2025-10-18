import { useDispatch, useSelector } from "react-redux";
import FriendsItem from "../FriendsItem/FriendsItem";
import { getFriends } from "../../redux/api/api";
import { useEffect } from "react";

export default function FriendsList() {
  const dispatch = useDispatch();
  const { items, isLoading } = useSelector((state) => state.friends);

  useEffect(() => {
    dispatch(getFriends());
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <ul>
        {items.map((friends) => (
          <li key={friends._id}>
            <FriendsItem
              title={friends.title}
              phone={friends.phone}
              imageUrl={friends.imageUrl}
              email={friends.email}
              address={friends.address}
              addressUrl={friends.addressUrl}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
