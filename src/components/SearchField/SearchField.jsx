import s from "./SearchField.module.css";
import SearchIcon from "../../assets/icons/search.svg?react";
import CloseIcon from "../../assets/icons/cross-small.svg?react";
import { setKeyword } from "../../redux/news/newsSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function SearchField() {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setKeyword(inputValue));
  };

  const handleClear = () => {
    setInputValue("");
    dispatch(setKeyword(""));
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
