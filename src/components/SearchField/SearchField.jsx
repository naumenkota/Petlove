import s from "./SearchField.module.css";
import SearchIcon from "../../assets/icons/search.svg?react";
import CloseIcon from "../../assets/icons/cross-small.svg?react";
import { setKeyword as setNewsKeyword } from "../../redux/news/newsSlice";
import { setKeyword as setNoticesKeyword } from "../../redux/filter/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

export default function SearchField({ type }) {
  const dispatch = useDispatch();

  const keyword = useSelector((state) =>
    type === "news" ? state.news.keyword : state.filters.keyword
  );
  const [inputValue, setInputValue] = useState(keyword);

  useEffect(() => {
    setInputValue(keyword);
  }, [keyword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "news") {
      dispatch(setNewsKeyword(inputValue));
    } else {
      dispatch(setNoticesKeyword(inputValue));
    }
  };

  const handleClear = () => {
    setInputValue("");
    if (type === "news") {
      dispatch(setNewsKeyword(""));
    } else {
      dispatch(setNoticesKeyword(""));
    }
  };

  return (
    <form className={s.wrapper} onSubmit={handleSubmit}>
      <input
        className={s.input}
        placeholder="Search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" className={s.search_btn}>
        <SearchIcon />
      </button>
      {inputValue && (
        <CloseIcon className={s.closeIcon} onClick={handleClear} />
      )}
    </form>
  );
}
