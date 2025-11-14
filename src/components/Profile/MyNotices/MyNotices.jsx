import { useState } from "react";
import s from "./MyNotices.module.css";
import { useSelector, useDispatch } from "react-redux";
import NoticesItem from "../../NoticesItem/NoticesItem.jsx";
import { getNoticeId } from "../../../redux/api/api.js";
import Modal from "../../Modal/Modal.jsx";
import ModalNotice from "../../ModalNotice/ModalNotice.jsx";

export default function MyNotices() {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("favorites");
  const favorites = useSelector((state) => state.favorites.items);
  const viewed = useSelector((state) => state.viewed.items);
  const [selectedNotice, setSelectedNotice] = useState(null);

  const handleLearnMore = (notice) => {
    setSelectedNotice(notice);
    dispatch(getNoticeId(notice._id));
  };

  return (
    <div className={s.wrapper}>
      <div className={s.tabs}>
        <button
          className={`${s.tab} ${activeTab === "favorites" ? s.active : ""}`}
          onClick={() => setActiveTab("favorites")}
        >
          My favorite pets
        </button>

        <button
          className={`${s.tab} ${activeTab === "viewed" ? s.active : ""}`}
          onClick={() => setActiveTab("viewed")}
        >
          Viewed
        </button>
      </div>

      <div className={s.content}>
        {activeTab === "favorites" ? (
          favorites.length > 0 ? (
            favorites.map((notice) => (
              <NoticesItem
                key={notice._id}
                notices={notice}
                small
                onLearnMore={handleLearnMore}
              />
            ))
          ) : (
            <p className={s.text}>
              Oops,
              <span className={s.span}>
                looks like there aren't any furries
              </span>
              on our adorable page yet. Do not worry! View your pets on the
              "find your favorite pet" page and add them to your favorites.
            </p>
          )
        ) : viewed.length > 0 ? (
          viewed.map((notice) => (
            <NoticesItem
              key={notice._id}
              notices={notice}
              small
              onLearnMore={handleLearnMore}
            />
          ))
        ) : (
          <p className={s.text}>Here will be your viewed pets</p>
        )}
      </div>

      <Modal isOpen={!!selectedNotice} onClose={() => setSelectedNotice(null)}>
        <ModalNotice
          notices={selectedNotice}
          onClose={() => setSelectedNotice(null)}
        />
      </Modal>
    </div>
  );
}
