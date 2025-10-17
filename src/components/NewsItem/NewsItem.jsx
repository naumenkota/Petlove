import s from "./NewsItem.module.css";

export default function NewsItem({ title, text, imgUrl, date, url }) {
  const d = new Date(date);
  const formattedDate =
    String(d.getDate()).padStart(2, "0") +
    "/" +
    String(d.getMonth() + 1).padStart(2, "0") +
    "/" +
    d.getFullYear();

  return (
    <div className={s.wrapper}>
      <img src={imgUrl} alt={title} className={s.image} />
      <div className={s.content}>
        <h3 className={s.title}>{title}</h3>
        <p className={s.text}>{text}</p>
        <div className={s.date_wrapper}>
          <p className={s.date}>{formattedDate}</p>
          <a href={url} target="_blank" className={s.read_more}>
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}
