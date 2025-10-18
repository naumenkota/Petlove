import s from "./Pagination.module.css";
import OneLeftIcon from "../../assets/icons/pagination/one-left.svg?react";
import OneRightIcon from "../../assets/icons/pagination/one-right.svg?react";
import { useMediaQuery } from "react-responsive";
import TwoLeftIcon from "../../assets/icons/pagination/two-left.svg?react";
import TwoRightIcon from "../../assets/icons/pagination/two-right.svg?react";

export default function Pagination({ page, totalPages, onPageChange }) {
  const tablet = useMediaQuery({ minWidth: 768 });

  if (!totalPages || totalPages <= 1) return null;

  let maxVisible = 2;
  if (tablet) maxVisible = 3;

  const getPages = () => {
    const pagesToShow = [];
    const visible = maxVisible;

    const startPage = Math.max(1, page);
    const endPage = Math.min(startPage + visible - 1, totalPages);

    for (let i = startPage; i <= endPage; i++) {
      pagesToShow.push(i);
    }

    if (endPage < totalPages) {
      pagesToShow.push("...");
    }

    return pagesToShow;
  };

  const pagesToShow = getPages();

  return (
    <div className={s.wrapper}>
      <div className={s.icon_wrapper}>
        <button
          onClick={() => onPageChange(1)}
          disabled={page === 1}
          className={s.btn}
        >
          <TwoLeftIcon />
        </button>
        <button
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
          className={s.btn}
        >
          <OneLeftIcon />
        </button>
      </div>

      <div className={s.page_wrapper}>
        {pagesToShow.map((p, i) =>
          p === "..." ? (
            <span key={i} className={s.btn}>
              ...
            </span>
          ) : (
            <button
              key={i}
              onClick={() => onPageChange(p)}
              className={`${s.btn} ${p === page ? s.active : ""}`}
            >
              {p}
            </button>
          )
        )}
      </div>

      <div className={s.icon_wrapper}>
        <button
          onClick={() => onPageChange(page + 1)}
          disabled={page === totalPages}
          className={s.btn}
        >
          <OneRightIcon />
        </button>

        <button
          onClick={() => onPageChange(totalPages)}
          disabled={page === totalPages}
          className={s.btn}
        >
          <TwoRightIcon />
        </button>
      </div>
    </div>
  );
}
