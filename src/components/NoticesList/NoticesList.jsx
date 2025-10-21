import s from "./NoticesList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getNotices } from "../../redux/api/api";
import NoticesItem from "../NoticesItem/NoticesItem";
import { useEffect } from "react";
import { setPage } from "../../redux/notices/noticesSlice.js";
import Pagination from "../Pagination/Pagination.jsx";
import NoticesFilters from "../NoticesFilters/NoticesFilters.jsx";

export default function NoticesList() {
  const dispatch = useDispatch();
  const { items, isLoading, page, perPage, totalPages } = useSelector(
    (state) => state.notices
  );
  const { selectedCategory, selectedSex, selectedSpecies, keyword } =
    useSelector((state) => state.filters);
  const { selectedCity } = useSelector((state) => state.cities);

  const filteredNotices = items.filter((notice) => {
    if (!selectedCity) return true;
    return notice.location === selectedCity.value;
  });

  useEffect(() => {
    dispatch(
      getNotices({
        page,
        perPage,
        category: selectedCategory,
        sex: selectedSex,
        species: selectedSpecies,
        keyword: keyword,
        location: selectedCity?.value,
      })
    );
  }, [
    dispatch,
    selectedCategory,
    selectedSex,
    selectedSpecies,
    selectedCity,
    keyword,
    page,
    perPage,
  ]);

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <NoticesFilters />
      <ul className={s.list}>
        {filteredNotices.map((notices) => (
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
