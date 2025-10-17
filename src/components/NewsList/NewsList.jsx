import s from "./NewsList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getNews } from "../../redux/api/api";
import NewsItem from "../NewsItem/NewsItem";

export default function NewsList() {
  const dispatch = useDispatch();
  const { items, isLoading, page, limit, keyword } = useSelector(
    (state) => state.news
  );
  useEffect(() => {
    dispatch(getNews({ page, limit, keyword }));
  }, [dispatch, page, limit, keyword]);

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
    </div>
  );
}
