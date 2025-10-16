import s from "./SearchField.module.css";
import SearchIcon from "../../assets/icons/search.svg?react";
import CloseIcon from "../../assets/icons/cross-small.svg?react";
import { useState } from "react";

export default function SearchField() {
  const [value, setValue] = useState("");
  return (
    <div className={s.wrapper}>
      <input
        className={s.input}
        placeholder="Search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <SearchIcon className={s.icon} />
      {value && (
        <CloseIcon className={s.closeIcon} onClick={() => setValue("")} />
      )}
    </div>
  );
}
