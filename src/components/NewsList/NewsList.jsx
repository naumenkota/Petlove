import s from "./NewsList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getNews } from "../../redux/api/api";
import NewsItem from "../NewsItem/NewsItem";
import Pagination from "../Pagination/Pagination";
import { setPage } from "../../redux/news/newsSlice";

export default function NewsList() {
  const dispatch = useDispatch();
  const { items, isLoading, page, perPage, keyword, totalPages } = useSelector(
    (state) => state.news
  );

  useEffect(() => {
    dispatch(getNews({ page, perPage, keyword }));
  }, [dispatch, page, perPage, keyword]);

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <ul className={s.list}>
        {items.map((news) => (
          <li key={news._id} className={s.list_item}>
            <NewsItem
              title={news.title}
              text={news.text}
              imgUrl={news.imgUrl}
              date={news.date}
              url={news.url}
            />
          </li>
        ))}
      </ul>
      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
