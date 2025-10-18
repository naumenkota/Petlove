import NewsList from "../../components/NewsList/NewsList";
import SearchField from "../../components/SearchField/SearchField";
import Title from "../../components/Title/Title";
import s from "./NewsPage.module.css";

export default function NewsPage() {
  return (
    <div className={s.wrapper}>
      <div className={s.search_wrapper}>
        <Title>News</Title>
        <SearchField />
      </div>
      <NewsList />
    </div>
  );
}
