import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelectors } from "../../Redux/auth";
import s from "./Navigation.module.css";

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div>
      <NavLink to="/" className={s.link} activeClassName={s.active} exact>
        Главная
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={s.link}
          activeClassName={s.active}
        >
          Контакты
        </NavLink>
      )}
    </div>
  );
}