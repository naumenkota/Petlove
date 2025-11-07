import { useState } from "react";
import s from "./MyNotices.module.css";
import { useSelector } from "react-redux";
import NoticesItem from "../../NoticesItem/NoticesItem.jsx";

export default function MyNotices() {
  const [activeTab, setActiveTab] = useState("favorites");
  const favorites = useSelector(
    (state) => state.auth.user.noticesFavorites || []
  );
  const viewed = useSelector((state) => state.viewed.items);

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
                onLearnMore={() => {}}
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
            <NoticesItem key={notice._id} notices={notice} />
          ))
        ) : (
          <p>Here will be your viewed pets 👀</p>
        )}
      </div>
    </div>
  );
}
