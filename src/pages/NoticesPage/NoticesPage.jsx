import NoticesList from "../../components/NoticesList/NoticesList";
import NoticesFilters from "../../components/NoticesFilters/NoticesFilters";
import Title from "../../components/Title/Title";
export default function NoticesPage() {
  return (
    <>
      <Title>Find your favorite pet</Title>
      <NoticesFilters />
      <NoticesList />
    </>
  );
}
