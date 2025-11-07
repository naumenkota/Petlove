import NoticesList from "../../components/NoticesList/NoticesList";
import NoticesFilters from "../../components/NoticesFilters/NoticesFilters";
import Title from "../../components/Title/Title";
import s from "./NoticesPage.module.css";

export default function NoticesPage() {
  return (
    <div className={s.wrapper}>
      <Title>Find your favorite pet</Title>
      <NoticesFilters />
      <NoticesList />
    </div>
  );
}
