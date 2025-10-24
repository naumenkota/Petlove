import s from "./NoticesList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getNotices } from "../../redux/api/api";
import NoticesItem from "../NoticesItem/NoticesItem";
import { useEffect, useState } from "react";
import { setPage } from "../../redux/notices/noticesSlice.js";
import Pagination from "../Pagination/Pagination.jsx";
import NoticesFilters from "../NoticesFilters/NoticesFilters.jsx";
import authSelectors from "../../redux/auth/authSelectors";
import ModalNotice from "../ModalNotice/ModalNotice.jsx";
import ModalAttention from "../ModalAttention/ModalAttention.jsx";
import Modal from "../Modal/Modal.jsx";

export default function NoticesList() {
  const [selectedNotice, setSelectedNotice] = useState(null);

  const handleLearnMore = (notices) => {
    setSelectedNotice(notices);
  };

  const handleCloseModal = () => {
    setSelectedNotice(null);
  };

  const isAuth = useSelector(authSelectors.selectIsLoggedIn);
  console.log("isAuth:", isAuth);

  const dispatch = useDispatch();
  const { items, isLoading, page, perPage, totalPages } = useSelector(
    (state) => state.notices
  );
  const {
    selectedCategory,
    selectedSex,
    selectedSpecies,
    keyword,
    byPopularity,
    byPrice,
  } = useSelector((state) => state.filters);
  const { selectedCity } = useSelector((state) => state.cities);

  const filteredNotices = selectedCity
    ? items.filter((notice) => notice.locationId === selectedCity.value)
    : items;

  useEffect(() => {
    dispatch(
      getNotices({
        page,
        perPage,
        category: selectedCategory,
        sex: selectedSex,
        species: selectedSpecies,
        keyword: keyword,
        byPopularity,
        byPrice,
        locationId: selectedCity?.value,
      })
    );
  }, [
    dispatch,
    selectedCategory,
    selectedSex,
    selectedSpecies,
    selectedCity,
    byPopularity,
    byPrice,
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
      <ul className={s.list}>
        {filteredNotices.map((notices) => (
          <li key={notices._id}>
            <NoticesItem notices={notices} onLearnMore={handleLearnMore} />
          </li>
        ))}
      </ul>
      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      <Modal isOpen={!!selectedNotice} onClose={handleCloseModal}>
        {isAuth ? <ModalNotice notices={selectedNotice} /> : <ModalAttention />}
      </Modal>
    </>
  );
}
