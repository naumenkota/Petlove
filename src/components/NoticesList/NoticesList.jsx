import s from "./NoticesList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getNotices } from "../../redux/api/api";
import NoticesItem from "../NoticesItem/NoticesItem";
import { useEffect } from "react";
import { setPage } from "../../redux/notices/noticesSlice.js";
import Pagination from "../Pagination/Pagination.jsx";

export default function NoticesList() {
  const dispatch = useDispatch();
  const { items, isLoading, page, perPage, keyword, totalPages } = useSelector(
    (state) => state.notices
  );

  useEffect(() => {
    dispatch(getNotices({ page, perPage, keyword }));
  }, [dispatch, page, perPage, keyword]);

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };

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
      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
}
