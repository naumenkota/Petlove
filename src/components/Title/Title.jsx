import s from "./Title.module.css";

export default function Title({ children }) {
  return <h1 className={s.title}> {children}</h1>;
}
