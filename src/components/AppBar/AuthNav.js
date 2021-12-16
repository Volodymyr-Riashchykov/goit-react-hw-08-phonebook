import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

export default function authNav() {
  return (
    <div>
      <NavLink
        to="/register"
        className={s.link}
        activeClassName={s.active}
      >
        Регистрация
      </NavLink>
      <NavLink
        to="/login"
        className={s.link}
        activeClassName={s.active}
      >
        Авторизация
      </NavLink>
    </div>
  );
}