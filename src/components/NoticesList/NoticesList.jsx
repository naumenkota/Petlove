import s from "./NoticesList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getNotices } from "../../redux/api/api";
import NoticesItem from "../NoticesItem/NoticesItem";
import { useEffect } from "react";

export default function NoticesList() {
  const dispatch = useDispatch();
  const { items, isLoading } = useSelector((state) => state.notices);

  useEffect(() => {
    dispatch(getNotices({}));
  }, [dispatch]);

  console.log("Notices items:", items, "Loading:", isLoading);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <ul className={s.list}>
        {items.map((notices) => (
          <li key={notices._id}>
            <NoticesItem notices={notices} />
          </li>
        ))}
      </ul>
    </>
  );
}
