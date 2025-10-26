import s from "./UserBar.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/api/api";
import { useEffect } from "react";
import UserIcon from "../../assets/icons/user.svg?react";
import authSelectors from "../../redux/auth/authSelectors";
import { useMediaQuery } from "react-responsive";

export default function UserBar() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const userName = useSelector(authSelectors.selectName);
  const userAvatar = useSelector(authSelectors.selectUserAvatar);
  const tab = useMediaQuery({ minWidth: 768 });

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getUser());
    }
  }, [dispatch, isLoggedIn]);

  if (!isLoggedIn) return null;

  return (
    <div className={s.wrapper}>
      <NavLink to="/profile" className={s.link}>
        {userAvatar ? (
          <img src={userAvatar} alt="User avatar" className={s.avatar} />
        ) : (
          <button className={s.icon}>
            <UserIcon />
          </button>
        )}

        {tab && <p className={s.name}>{userName}</p>}
      </NavLink>
    </div>
  );
}
