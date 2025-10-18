import s from "./SearchField.module.css";
import SearchIcon from "../../assets/icons/search.svg?react";
import CloseIcon from "../../assets/icons/cross-small.svg?react";
import { setKeyword } from "../../redux/news/newsSlice";
import { useDispatch, useSelector } from "react-redux";

export default function SearchField() {
  const dispatch = useDispatch();
  const keyword = useSelector((state) => state.news.keyword);

  return (
    <div className={s.wrapper}>
      <input
        className={s.input}
        placeholder="Search"
        value={keyword}
        onChange={(e) => dispatch(setKeyword(e.target.value))}
      />
      <SearchIcon className={s.icon} />
      {keyword && (
        <CloseIcon
          className={s.closeIcon}
          onClick={() => dispatch(setKeyword(""))}
        />
      )}
    </div>
  );
}
