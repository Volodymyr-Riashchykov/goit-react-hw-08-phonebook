import { useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
import AuthNav from "./AuthNav";
import Navigation from "./Navigation";
import { authSelectors } from "../../Redux/auth";
import User from "./User";
import s from "./Navigation.module.css";

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <div className={s.container}>
      <Navigation />
      
      {isLoggedIn ? <User /> : <AuthNav />}
    </div>
  );
}