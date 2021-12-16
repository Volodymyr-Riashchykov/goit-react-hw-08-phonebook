import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelectors } from "../Redux/auth";

export default function PublicRoute({
  children,
  restricted = false,
  ...routePorps
}) {
  const isLogedIn = useSelector(authSelectors.getIsLoggedIn);
  const redirect = isLogedIn && restricted;
  return (
    <Route {...routePorps}>{redirect ? <Redirect to="/" /> : children}</Route>
  );
}